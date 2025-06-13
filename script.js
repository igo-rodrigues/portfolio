function navegar(destino) {
  document.querySelector("main").classList.remove("fade-page");
  document.querySelector("main").style.opacity = 0;
  setTimeout(() => {
    window.location.href = destino;
  }, 300);
}
window.addEventListener('load', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  if (header && main) {
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = `${headerHeight + 20}px`; // 20px extra de margem
  }
});

