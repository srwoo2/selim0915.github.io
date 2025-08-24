/**
 * 모드전환 버튼 이벤트
 */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  if (toggle) {
    toggle.textContent = "Dark";

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        toggle.textContent = "Light";
      } else {
        toggle.textContent = "Dark";
      }
    });
  }
});

/**
 * 최상위 이동 버튼 이벤트
 */
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.textContent = "TOP";
  
  const checkScrollable = () => {
    if (document.body.scrollHeight > window.innerHeight) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.pointerEvents = "auto";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
    }
  };

  checkScrollable();
  window.addEventListener("scroll", checkScrollable);
  window.addEventListener("resize", checkScrollable);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});