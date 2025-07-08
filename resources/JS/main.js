document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-content");

  loadPage("home");

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);

      // ── Close nav menu if open (for mobile/hamburger) ──
      const nav = document.querySelector("nav");
      nav.classList.remove("open");  // example: remove your “open” class
    }  // ← closes the if(link) block
  }); // ← closes the click handler

  function loadPage(page) {
    fetch(`./resources/pages/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        main.innerHTML = html;
        window.scrollTo(0, 0);
      })
      .catch(err => {
        console.error(err);
        main.innerHTML = `<p>Sorry, the "${page}" page could not be loaded.</p>`;
      });
  } // ← closes loadPage

}); // ← closes DOMContentLoaded
