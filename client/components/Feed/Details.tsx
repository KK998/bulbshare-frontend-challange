import { useMemo } from "react"

type Props = {
    brandLogo: string
    feedTitle: string
    startsOn: string
    bannerText: string
    adImageOne: string
    adImageTwo: string
}

function Details({
    brandLogo,
    feedTitle,
    startsOn,
    bannerText,
    adImageOne,
    adImageTwo
}: Props) {
    const formattedTime = useMemo(() => new Date(startsOn).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }), [startsOn])

    return (
        <section className="flex flex-col gap-3 items-center p-5">
            <img className="w-20 h-20 object-contain " src={brandLogo} alt="Brand logo" />
            <h2 className="text-3xl text-slate-700 font-bold">{feedTitle}</h2>
            <p className="text-xl text-slate-700 font-bold">{formattedTime}</p>
            <p className="text-base text-gray-500 font-regular">{bannerText}</p>
            <div className="flex flex-col gap-10">
                <img className="object-contain h-[400px]" src={adImageOne} alt="Advert one" />
                <img className="object-contain w-[576px] h-[400px]" src={adImageTwo} alt="Advert two" />
            </div>
        </section>
    )
}

export default Details