import { useCallback, useEffect, useState } from "react";
import API, { FeedItem } from "../../util/api";

const api = new API();

const useFeed = () => {
    const [feedItems, setFeedItems] = useState<Array<FeedItem>>([]);
    const [page, setPage] = useState(1);
    const [endOfItems, setEndOfItems] = useState(false);

    const setPlaceholderFeedItems = useCallback(() => {
        if (!endOfItems) {
            const placeholderFeedItems: FeedItem[] = [];
            for (let i = 0; i < 1; i++) {
                placeholderFeedItems.push({} as FeedItem);
            }
            setFeedItems(p => [...p, ...placeholderFeedItems]);
        }
    }, [endOfItems]);

    useEffect(() => {
        const placeholderFeedItems = [];
        for (let i = 0; i < 3; i++) {
            placeholderFeedItems.push({} as FeedItem);
        }
        setFeedItems(placeholderFeedItems);
        api.fetchFeed(1)
            .then((data) => {
                setFeedItems(data);
            });
    }, [setFeedItems])

    const fetchNextPageOnScroll = useCallback(() => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPlaceholderFeedItems();
            api.fetchFeed(page + 1)
                .then((data) => {
                    if (data !== null) {
                        setFeedItems(prev => {
                            const filteredItems = [...prev.filter(item => item.briefref)];
                            return [...filteredItems, ...data];
                        });
                        setPage(prev => ++prev);
                    } else {
                        setFeedItems(prev => {
                            setEndOfItems(true);
                            const filteredItems = [...prev.filter(item => item.briefref)];
                            return [...filteredItems];
                        });
                    }
                });
        }
    }, [page, setPlaceholderFeedItems]);

    useEffect(() => {
        window.addEventListener('scroll', fetchNextPageOnScroll);

        return () => {
            window.removeEventListener('scroll', fetchNextPageOnScroll);
        }
    }, [fetchNextPageOnScroll])

    return {
        feedItems,
        endOfItems
    }
}

export default useFeed;