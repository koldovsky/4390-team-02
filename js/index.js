function init() {
  import("./global.header-burger.js");
  import("./global.header-menu-list.js");
  import("./index.top-picks.js").then((module) => {
    module.default();
  });
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});