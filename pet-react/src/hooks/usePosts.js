import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts ;
}


//          Разобраться почему не так работают импорты или неравильно где-то сделанно переход на usePosts.js
//      в общей сложности доделать export ...