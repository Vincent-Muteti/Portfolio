const scrollTopBtn = document.getElementById("scrollTopBtn");
const yearSpan = document.getElementById("year");

yearSpan.textContent = new Date().getFullYear();

window.onscroll = () => {
  if (document.documentElement.scrollTop > 250) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
