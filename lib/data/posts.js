export const ALL_POSTS_QUERY = `#graphql
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
  }
`;

/**
 * getPostBySlug
 */

export const POST_BY_SLUG = `#graphql
      query PostBySlug($slug: ID!) {
        post(slug: $slug, idType: SLUG) {
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
    `;
export const QUERY_POST_SEO_BY_SLUG = `#graphql 
    query PostSEOBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
        id
        seo {
            canonical
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphTitle
            opengraphType
            readingTime
            title
            twitterDescription
            twitterTitle
            twitterImage {
            altText
            sourceUrl
            mediaDetails {
                width
                height
                 }
            }
            opengraphImage {
            altText
            sourceUrl
            mediaDetails {
                height
                width
                }
            }
         }
        }
    }
    `;

/**
 * getPostsByAuthorSlug
 */
export const QUERY_POST_BY_AUTHOR_SLUG = `#graphql
    query PostByAuthorSlug($slug: String!) {
        posts(where: { authorName: $slug }) {
            edges {
                node {
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
                date
                excerpt
                featuredImage {
                    node {
                    altText
                    caption
                    id
                    sizes
                    sourceUrl
                    srcSet
                    }
                }
                id
                modified
                databaseId
                slug
                title
                isSticky
                }
            }
        }
    }
`;

export const QUERY_POST_BY_CATEGORY_ID = `#graphql
    query PostsByCategoryId($categoryId: Int!){
       posts(where: { categoryId: $categoryId }) {
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
  `;

export const QUERY_ALL_POST_WITH_SLUG = `#graphql
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

export const QUERY_ALL_POSTS_FOR_HOME = `#graphql
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
  `;
export const QUERY_POST_AND_MORE_POSTS = `#graphql
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
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
    }`;

export const QUERY_POST_BY_SLUG = `#graphql
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
        `;

export const QUERY_POSTS = `#graphql
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `;
