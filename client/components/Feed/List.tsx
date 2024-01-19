import cn from '../../util/cn'
import Card from './Card'
import useFeed from './useFeed';

type ListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function List({ className, ...props }: ListProps) {
    const { feedItems, endOfItems } = useFeed();

    return (
        <section className={cn("flex flex-col justify-start items-center container mx-auto gap-5 my-5 p-5", className)} {...props}>
            {feedItems && feedItems.map((item, index) => item.briefref ? (
                <Card
                    /*
                        key in this situation can't be briefref
                        as the briefref is not unique when the feed.json reaches the end
                        using the index is not ideal but it works for now
                    */
                    key={index}
                    header={<Card.Header brand={item.brand.logo} brandName={item.brand.name} link={"Link"} />}
                    image={item.banner_image}
                    title={item.banner_text}
                />
            ) : <Card.Loader key={index} />)}
            {endOfItems && (
                <section className='flex flex-col p-5'>
                    <p className="text-2xl text-slate-700 font-bold text-center">End of Feed 🥳</p>
                </section>
            )}
        </section>
    )
}

export default List;