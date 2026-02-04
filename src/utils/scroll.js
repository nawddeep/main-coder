/**
 * Smoothly scrolls to a section by its selector
 * @param {string} selector - CSS selector for the target element (e.g., '#contact')
 */
export const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Scrolls to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Gets the current scroll position
 * @returns {number} Current scroll position in pixels
 */
export const getScrollPosition = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Checks if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} threshold - Percentage of element that should be visible (0-1)
 * @returns {boolean} Whether the element is in viewport
 */
export const isInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  return vertInView && horInView;
};
