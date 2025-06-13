function navegar(destino) {
  document.querySelector("main").classList.remove("fade-page");
  document.querySelector("main").style.opacity = 0;
  setTimeout(() => {
    window.location.href = destino;
  }, 300);
}
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const headerHeight = header.offsetHeight;
  main.style.paddingTop = `${headerHeight + 40}px`; // 40px extra de margem
});
