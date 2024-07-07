/**
* Template Name: ZenBlog - v1.3.0
* Template URL: https://bootstrapmade.com/zenblog-bootstrap-blog-template/
* Author: BootstrapMade.com
* License: https:///bootstrapmade.com/license/
*/
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Open and close the search form.
   */
  const searchOpen = document.querySelector(".js-search-open");
  const searchClose = document.querySelector(".js-search-close");
  const searchWrap = document.querySelector(".js-search-form-wrap");

  searchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.add("active");
  });

  searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.remove("active");
  });
});
