const rv = document.getElementById('review');

window.onscroll = function () {
  var btn = document.getElementById("scrollTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
    rv.style.bottom = "90px"
  } else {
    btn.style.display = "none";
    rv.style.bottom = "20px"
  }
};

// Cuộn lên đầu khi nhấn nút
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const floatElements = document.querySelectorAll(".float-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  floatElements.forEach((el) => observer.observe(el));
});

rv.addEventListener("mouseover",()=>{
    rv.textContent="⭐ Đánh giá ở đây nhé";
});
rv.addEventListener("mouseout",()=>{
    rv.textContent="⭐⭐⭐";
});

rv.addEventListener("touchstart",()=>{
    rv.textContent="⭐ Đánh giá ở đây nhé";
});
rv.addEventListener("touchend",()=>{
    rv.textContent="⭐⭐⭐";
});
