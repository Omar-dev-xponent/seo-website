import fetchAPI from "./fetchAPI";
import { sortObjectsByDate } from "./datetime";
const postsPerPage = 10;

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
    posts(first: 10000) {
      edges {
        node {
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          id
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          content
          date
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
          databaseId
          title
          slug
          isSticky
        }
      }
    }
  },

    
`
  );

  const posts = data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
    revalidate: 3600,
  };
}

/**
 * postPathBySlug
 */

export function postPathBySlug(slug) {
  return `/blog/${slug}`;
}

/**
 * getPostBySlug
 */

export async function getPostBySlug(slug) {
  const postData = await fetchAPI(
    `
query PostSEOBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    content
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
      }
    }
    title
    author {
      node {
        firstName
        avatar {
          url
        }
      }
    }
  }
}
      `,

    {
      variables: {
        slug: slug,
      },
    }
  );

  // const post = [postData?.data.post].map(mapPostData)[0];

  return postData;
}

/**
 * getPostsByAuthorSlug
 */

export async function getPostsByAuthorSlug(slug) {
  let postData;

  try {
    postData = await fetchAPI(
      `
        query PostByAuthorSlug($slug: String!) {
          posts(where: { authorName: $slug }) {
            edges {
        node {
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          id
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          content
          date
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
          databaseId
          title
          slug
          isSticky
        }
      }
        }
      }
    `,
      {
        variables: {
          slug,
        },
      }
    );
  } catch (e) {
    console.log(`Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = postData?.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
    revalidate: 3600,
  };
}

export async function getPostsByCategoryId(categoryId, perPage = 10, offset) {
  const data = await fetchAPI(
    `
      query PostsByCategoryId($categoryId: Int!, $perPage: Int!, $offset: Int!) {
      posts(
        where: {offsetPagination: {size: $perPage, offset: $offset}, categoryId: $categoryId}
      ) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  databaseId
                  id
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
    }
     
  `,
    {
      variables: {
        categoryId,
        perPage,
        offset,
      },
    }
  );

  const posts = data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
    revalidate: 3600,
  };
}

/**
 * getTotalPostByCategoryId
 * @param {*} param0
 * @returns
 */

export async function getTotalPostByCategoryId(categoryId) {
  const data = await fetchAPI(
    `
     query totalPostsByCategoryId($categoryId: Int!) {
        posts(where: {categoryId: $categoryId}) {
          pageInfo {
            offsetPagination {
              total
            }
          }
        }
      }

  `,

    {
      variables: {
        categoryId,
      },
    }
  );

  return data?.posts?.pageInfo?.offsetPagination?.total ?? 0;
}

/**
 * getRecentPosts
 */

export async function getRecentPosts({ count }) {
  const { posts } = await getAllPosts();
  const sorted = sortObjectsByDate(posts);
  return {
    posts: sorted.slice(0, count),
    revalidate: 3600,
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== "string") {
    throw new Error(
      `Failed to sanitize excerpt: invalid type ${typeof excerpt}`
    );
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, "&hellip;");

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace("....", ".");
  sanitized = sanitized.replace(".&hellip;", ".");

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, "");

  return sanitized;
}

/**
 * updateUserAvatar
 */

export function updateUserAvatar(avatar) {
  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  return {
    ...avatar,
    url: avatar.url?.replace("http://", "https://"),
  };
}

/**
 * mapPostData
 */

export function mapPostData(post = {}) {
  const data = { ...post };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if (data.author?.avatar) {
    data.author.avatar = updateUserAvatar(data.author.avatar);
  }

  // Clean up the categories to make them more easy to access

  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  // Clean up the featured image to make them more easy to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

/**
 * getRelatedPosts
 */

export async function getRelatedPosts(category, postId, count = 5) {
  let relatedPosts = [];

  if (category) {
    const { posts } = await getPostsByCategoryId(category.databaseId);
    const filtered = posts.filter(({ postId: id }) => id !== postId);
    const sorted = sortObjectsByDate(filtered);
    relatedPosts = sorted.map((post) => ({
      title: post.title,
      slug: post.slug,
    }));
  }

  if (relatedPosts.length > count) {
    return relatedPosts.slice(0, count);
  }
  return relatedPosts;
}

/**
 * sortStickyPosts
 */

export function sortStickyPosts(posts) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  );
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
                edges {
                  node {
                    databaseId
                    id
                    name
                    slug
                  }
                }
              }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  const posts = data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      description
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      seo {
          title
          metaDesc
        }
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,

    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

/**
 * getPageCount
 */

export async function getPagesCount(posts, postsPerPage) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / _postsPerPage);
}

/**
 * getPaginatedPosts
 */

export async function getPaginatedPosts({ currentPage = 1, ...options } = {}) {
  const { posts } = await getAllPosts(options);

  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = Number(currentPage);

  if (typeof page === "undefined" || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
    revalidate: 3600,
  };
}
