const gallery = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Lightbox
gallery.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// Form
window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const success = document.getElementById("successMessage");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = new FormData(form);

        try {

            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                form.reset();
                form.style.display = "none";
                success.style.display = "block";
            } else {
                alert("Mesaj gönderilemedi.");
            }

        } catch (err) {
            alert("Bağlantı hatası.");
        }

    });

});
const months = [
    "OCAK",
    "ŞUBAT",
    "MART",
    "NİSAN",
    "MAYIS",
    "HAZİRAN",
    "TEMMUZ",
    "AĞUSTOS",
    "EYLÜL",
    "EKİM",
    "KASIM",
    "ARALIK"
];

function updateCalendar() {

    const today = new Date();

    document.getElementById("calendar-day").textContent = today.getDate();

    document.getElementById("calendar-month").textContent =
        months[today.getMonth()];
}

updateCalendar();
