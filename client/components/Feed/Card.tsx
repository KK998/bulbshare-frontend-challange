
type CardProps = {
    header: React.ReactNode
    image: string
    title: string
}

function Card({ header, image, title }: CardProps) {
    return (
        <article className="flex flex-col relative max-w-full sm:max-w-xl border shadow-xl rounded overflow-hidden">
            {header}
            <div className="relative">
                <aside className="bg-gradient-to-t from-black/30 to-black/10 absolute top-0 left-0 w-full h-full " />
                <img className="object-cover w-full" src={image} alt={title} />
                <h3 className="text-2xl sm:text-4xl leading-snug font-bold absolute bottom-5 left-5 w-2/3 text-white">
                    {title}
                </h3>
            </div>
        </article>
    )
}

type HeaderProps = {
    brand: string
    brandName: string
    link: string
}

function Header({ brand, brandName, link }: HeaderProps) {
    return (
        <header className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex flex-col items-center justify-center">
                    <img className="object-contain max-w-full" src={brand} alt={brandName} />
                </div>
                <span className="text-lg text-slate-700 font-black">{brandName}</span>
            </div>
            <a className="uppercase text-blue-500 font-bold text-lg" href={link}>Join Brief Now!</a>
        </header>
    )
}

function Loader() {
    return (
        <article className="flex flex-col max-w-full w-[576px] border shadow-xl rounded animate-pulse">
            <div className="flex items-center p-5">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4" />
                <div className="flex flex-col gap-1">
                    <div className="bg-gray-300 h-3 w-52 max-w-full rounded-full" />
                    <div className="bg-gray-300 h-3 w-40 max-w-full rounded-full" />
                </div>
            </div>
            <div className="bg-gray-300 h-[400px] w-full" />
            <div className="flex flex-col p-5 gap-2">
                <div className="bg-gray-300 h-4 w-96 max-w-full rounded-full" />
                <div className="bg-gray-300 h-4 w-96 max-w-full rounded-full" />
                <div className="bg-gray-300 h-4 w-60 max-w-full rounded-full" />
                <br />
                <div className="bg-gray-300 h-4 w-96 max-w-full rounded-full" />
            </div>
        </article>
    )
}

Card.Header = Header;
Card.Loader = Loader;

export default Card