export const PER_PAGE_FIRST = 9; // No of posts to be shown on first page.
export const PER_PAGE_REST = 9; // No of posts to be shown following page and after.
export const MAX_NUM_PAGES = 9;

export const getPageOffset = (pageNo) => {
  /**
   * Offset is how many posts are already shown ( meaning, after how many posts should we start qurying ).
   * @type {number}
   */
  let offset = 0;
  pageNo = Number(pageNo);
  if (1 === pageNo) {
    offset = 0;
  } else if (2 === pageNo) {
    offset = PER_PAGE_FIRST;
  } else {
    offset = PER_PAGE_FIRST + (pageNo - 2) * PER_PAGE_REST;
  }
  return offset;
};

export const totalPagesCount = (totalPostsCount) => {
  return Math.ceil((totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1);
};

/**
 * Create Pagination Links Array.
 *
 * Example: [1, "...", 521, 522, 523, 524, 525, "...", 529]
 *
 * @param {int} currentPage Current page no.
 * @param {int} totalPages Count of total no of pages.
 *
 * @return {Array} Array containing the indexes to be looped through to create pagination
 */
export const createPaginationLinks = (currentPage, totalPages) => {
  const paginationArray = [];
  let countOfDotItems = 0;

  // If there is only one page, return an empty array.
  if (!totalPages && 1 >= totalPages) {
    return paginationArray;
  }

  /**
   * Push the two index items before the current page.
   */
  if (0 < currentPage - 2) {
    paginationArray.push(currentPage - 2);
  }

  if (0 < currentPage - 1) {
    paginationArray.push(currentPage - 1);
  }

  // Push the current page index item.
  paginationArray.push(currentPage);

  /**
   * Push the two index items after the current page.
   */
  if (totalPages >= currentPage + 1) {
    paginationArray.push(currentPage + 1);
  }

  if (totalPages >= currentPage + 2) {
    paginationArray.push(currentPage + 2);
  }

  /**
   * Push the '...' at the beginning of the array
   * only if the difference of between the 1st and 2nd index item is greater than 1.
   */
  if (1 < paginationArray[0] - 1) {
    paginationArray.unshift("...");
    countOfDotItems += 1;
  }

  /**
   * Push the '...' at the end of the array.
   * only if the difference of between the last and 2nd last item is greater than 2.
   * We remove the count of dot items from the array to get the actual indexes, while checking the condition.
   */
  if (
    2 <
    totalPages - paginationArray[paginationArray.length - (2 - countOfDotItems)]
  ) {
    paginationArray.push("...");
  }

  // Push first index item in the array if it does not already exists.
  if (-1 === paginationArray.indexOf(1)) {
    paginationArray.unshift(1);
  }

  // Push last index item in the array if it does not already exists.
  if (-1 === paginationArray.indexOf(totalPages)) {
    paginationArray.push(totalPages);
  }

  return paginationArray;
};

export function getPages(pagesCount, currentPage, hasNextDots, hasPrevDots) {
  let pages = pagesCount;
  let start = 0;
  // If the number of pages exceeds the max
  if (pagesCount > MAX_NUM_PAGES) {
    // Set number of pages to the max
    pages = MAX_NUM_PAGES;
    const half = Math.ceil(MAX_NUM_PAGES / 2);
    const isHead = currentPage <= half;
    const isTail = currentPage > pagesCount - half;
    hasNextDots = !isTail;
    // If the current page is at the head, the start variable remains 0
    if (!isHead) {
      hasPrevDots = true;
      // If the current page is at the tail, the start variable is set to
      // the last chunk. Otherwise the start variable will place the current
      // page at the middle
      start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
    }
  }
  return [...new Array(pages)].map((_, i) => i + 1 + start);
}
