alert("JavaScript çalışıyor");

const gallery = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".clo

gallery.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
const form = document.getElementById("contactForm");
const success = document.getElementById("successMessage");

if(form){

console.log(form);

window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const success = document.getElementById("successMessage");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = new FormData(form);

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

    });

});