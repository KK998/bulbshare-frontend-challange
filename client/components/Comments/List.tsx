import Comment from "./Comment"
import useComments from "./useComments"

type Props = {
    briefref: string
    brandLogo: string
    brandName: string
}

function List({ briefref, brandLogo, brandName }: Props) {
    const { loading, comments } = useComments(briefref);

    return (
        <section className="flex flex-col shadow-xl h-full">
            <div className="flex items-center gap-2 p-5">
                <img className="w-10 h-10 object-contain" src={brandLogo} alt={brandName} />
                <span className="text-lg text-slate-700 font-black">{brandName}</span>
            </div>
            {loading ? (
                <Comment.Loader />
            ) : (
                <div className="flex flex-col gap-3 bg-gray-200 max-h-full overflow-y-scroll">
                    {comments.length > 0 ? comments.map((comment) => (
                        <Comment
                            key={comment.bcommentref}
                            avatar={comment.user.avatar}
                            name={comment.user.name}
                            comment={comment.comment}
                        />
                    )) : (
                        <div className="flex flex-col gap-5 p-5">
                            <p className="text-slate-700">No comments yet 😢</p>
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}

export default List