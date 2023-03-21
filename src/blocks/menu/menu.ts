const body = document.body;
const menuWrapper: HTMLElement = document.querySelector(".header")!;

export function toggleMenu() {
  menuWrapper.classList.toggle("is-open");
  body.classList.toggle("menu-open");
}
