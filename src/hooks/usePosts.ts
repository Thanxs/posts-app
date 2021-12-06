import { useMemo } from 'react';
import { Post } from '../components/posts/post';
import { Sort } from '../components/pages/Posts';

export const useSortedPosts = (posts: Post[], sort: Sort): Post[] => {
  const sortedPosts: Post[] = useMemo((): Post[] => {

    if (sort) {
      return [...posts]
        .sort((a: Post, b: Post): number =>
          a[sort].localeCompare(b[sort]));
    }

    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: Post[], sort: Sort, query: string): Post[] => {
  const sortedPosts: Post[] = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts: Post[] = useMemo(
    (): Post[] =>
      sortedPosts && sortedPosts.filter((post: Post): boolean =>
        post.title.toLowerCase().includes(query.toLowerCase())),
    [query, sortedPosts]
  );

  return sortedAndSearchedPosts;
}

