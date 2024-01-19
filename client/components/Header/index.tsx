type HeaderIconProp = { icon: string, alt: string } & React.HTMLAttributes<HTMLAnchorElement>

const HeaderIcon = ({ icon, alt, ...props }: HeaderIconProp) => {
    return (
        <a href="/#" {...props}>
            <img className={"w-5 h-5 object-contain"} src={icon} alt={alt} />
        </a>
    )
}

function Header() {
    return (
        <header className='flex container mx-auto justify-between items-center p-5'>
            <img src="/logo.svg" alt="Company logo" />
            <nav className="flex gap-4 items-center">
                <HeaderIcon icon="/discover.svg" alt="Discover" />
                <HeaderIcon icon="/message.svg" alt="Notifications" />
                <HeaderIcon className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 shadow-xl" icon="/profile.svg" alt="Profile" />
            </nav>
        </header>
    )
}

export default Header