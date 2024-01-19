type Props = {
    avatar: string
    name: string
    comment: string
}

function Comment({
    avatar,
    name,
    comment
}: Props) {
    return (
        <div date-testid="comment-card" className="flex flex-col gap-2 p-3 shadow">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-contain" />
            <div className="flex flex-col gap-0">
                <span className="text-lg text-slate-700 font-black">{name}</span>
                <span className="text-base text-gray-500 font-regular">{comment}</span>
            </div>
        </div>
    )
}

function Loader() {
    return (
        <div data-testid="comment-card-loader" className="flex flex-col gap-5 animate-pulse">
            <div className="bg-gray-300 h-10 w-10 max-w-full rounded-full" />
            <div className="flex flex-col gap-2">
                <div className="bg-gray-300 h-3 w-52 max-w-full rounded-full" />
                <div className="bg-gray-300 h-3 w-40 max-w-full rounded-full" />
            </div>
        </div>
    )
}

Comment.Loader = Loader;

export default Comment