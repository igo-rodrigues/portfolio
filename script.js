function navegar(destino) {
  document.querySelector("main").classList.remove("fade-page");
  document.querySelector("main").style.opacity = 0;
  setTimeout(() => {
    window.location.href = destino;
  }, 300);
}
