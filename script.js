const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.querySelector(".question ").addEventListener("click", () => {

    // بستن همه قبل از باز کردن جدید
    faqs.forEach(item => {
      if (item !== faq) item.classList.remove("open");
    });

    faq.classList.toggle("open");
  });
});
