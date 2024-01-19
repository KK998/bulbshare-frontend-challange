import { useCallback, useEffect, useState } from "react"
import { FeedItem } from "../../util/api"
import cn from "../../util/cn"
import Media from "../Feed/Media"
import Details from "../Feed/Details"
import List from "../Comments/List"

type ModalLeftSections = "TOP" | "BOTTOM"

type ModalSectionProps = React.PropsWithChildren<{
    section: ModalLeftSections
}>

function ModalSection({ children, section }: ModalSectionProps) {
    return (
        <div id={section} className="flex flex-col w-full min-h-screen">
            {children}
        </div>
    )
}

type FeedContentProps = {
    feedItem: FeedItem
}

function FeedContent({ feedItem }: FeedContentProps) {
    const [currentSection, setCurrentSection] = useState<ModalLeftSections>("TOP")

    const handleArrowClick = useCallback((section: ModalLeftSections) => {
        return () => setCurrentSection(section)
    }, []);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === "ArrowUp") {
            setCurrentSection("TOP")
        } else if (event.key === "ArrowDown") {
            setCurrentSection("BOTTOM")
        }
    }, []);

    useEffect(() => {
        const element = document.getElementById(currentSection)
        element?.scrollIntoView({ behavior: "smooth" })
    }, [currentSection]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    })

    return (
        <div className="w-full h-full flex justify-between relative">
            <section className="max-w-full flex-grow flex flex-col h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
                <ModalSection section="TOP">
                    <Media bannerImage={feedItem.banner_image} />
                </ModalSection>
                <ModalSection section="BOTTOM">
                    <Details
                        brandLogo={feedItem.brand.logo}
                        feedTitle={feedItem.feed_title}
                        startsOn={new Date(feedItem.starts_on).toString()}
                        bannerText={feedItem.banner_text}
                        adImageOne={feedItem.ad_1_image}
                        adImageTwo={feedItem.ad_2_image}
                    />
                </ModalSection>
                <aside className="absolute top-1/2 -translate-y-1/2 right-[calc(500px+theme(space.5))] flex flex-col gap-5">
                    <button className={cn("shadow", currentSection === "TOP" ? "opacity-20" : "opacity-100")} onClick={handleArrowClick("TOP")}>
                        <img className="rotate-180" src="/switch-down.svg" alt="arrow up" />
                    </button>
                    <button className={cn("shadow", currentSection === "BOTTOM" ? "opacity-20" : "opacity-100")} onClick={handleArrowClick("BOTTOM")}>
                        <img src="/switch-down.svg" alt="arrow up" />
                    </button>
                </aside>
            </section>
            <section className="max-w-full w-[500px] flex flex-col">
                <List briefref={feedItem.briefref} brandLogo={feedItem.brand.logo} brandName={feedItem.brand.name} />
            </section>
        </div>
    )
}

export default FeedContent