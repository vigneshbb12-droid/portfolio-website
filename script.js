document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const sections = document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
    sections.forEach(section=>{
        const position = section.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
});
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }
});
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
document.getElementById("year").textContent =
new Date().getFullYear();
const modal = document.getElementById("imageModal");
const img = document.getElementById("profileImg");
const fullImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");
img.onclick = function () {
    modal.style.display = "block";
    fullImg.src = this.src;
};
closeBtn.onclick = function () {
    modal.style.display = "none";
};
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};