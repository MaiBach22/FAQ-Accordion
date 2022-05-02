var faqs = document.querySelectorAll(".fbox");


faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");

    });
})