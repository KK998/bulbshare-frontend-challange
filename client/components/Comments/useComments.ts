import { useEffect, useState } from "react";
import API, { Comment } from "../../util/api";

const api = new API();

const useComments = (briefref: string) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        api.fetchComments(briefref)
            .then(data => setComments(data))
            .finally(() => setLoading(false));
    }, [briefref]);

    return { comments, loading };
};

export default useComments;