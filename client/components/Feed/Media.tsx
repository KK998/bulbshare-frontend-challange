type Props = {
    bannerImage: string
}

function Media({ bannerImage }: Props) {
    return (
        <div className="flex items-center justify-center h-full bg-black">
            <img className="object-contain w-[55%] max-h-full" src={bannerImage} alt="banner" />
        </div>
    )
}

export default Media