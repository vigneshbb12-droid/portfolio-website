document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop-120;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        header.style.boxShadow="0 5px 15px rgba(0,0,0,0.15)";
    }
    else{
        header.style.boxShadow="0 2px 10px rgba(0,0,0,0.1)";
    }
});
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const typingText = document.querySelector(".hero h3");
const text = "Full Stack Developer (Python | Java)";
let i = 0;
typingText.innerHTML = "";
function typing() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");
document.querySelectorAll(".profile-image").forEach(img => {
    img.addEventListener("click",()=>{
        viewer.style.display="flex";
        viewerImage.src=img.src;
    });
});
closeViewer.onclick=()=>{
    viewer.style.display="none";
};
viewer.onclick=(e)=>{
    if(e.target===viewer){
        viewer.style.display="none";
    }
};