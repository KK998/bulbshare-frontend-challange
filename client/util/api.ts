export interface Comment {
    "bcommentref": string,
    "briefref": string,
    "user": {
        "userref": string,
        "name": string,
        "avatar": string
    },
    "comment": string,
    "submitted_on": Date
}
export interface FeedItem {
    "briefref": string,
    "brand": {
        "name": string,
        "logo": string
    },
    "name": string,
    "description": string,
    "feed_title": string,
    "banner_text": string,
    "banner_image": string,
    "ad_1_image": string,
    "ad_2_image": string,
    "starts_on": Date
}

type FeedResponse = Array<FeedItem>

class API {
    protected basePath: string

    constructor() {
        this.basePath = window.location.href.replace(":3000", ":4000");
    }

    protected fetch = async (path: string, method: string) => {
        return await fetch(`${this.basePath}${path}`, {
            method,
        });
    }

    fetchFeed = async (page: number) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this
            .fetch(`api/feed?PAGE=${page}&PAGE_SIZE=5`, "GET")
            .then(res => res.json() as Promise<FeedResponse>);
    }

    fetchComments = async (briefref: string) => {
        // no need for any delay here
        return this
            .fetch(`api/comments?briefref=${briefref}`, "GET")
            .then(res => res.json() as Promise<Comment[]>);
    }
}

export default API;