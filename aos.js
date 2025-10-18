const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobileMenu")

function toggleMenu(){
    mobileMenu.classList.toggle("active")

    if(mobileMenu.classList.contains("active")){
        menuBtn.innerHTML = `<span class="material-icons text-amber-500 text-3xl">close</span>`
    } else{
        menuBtn.innerHTML = `<span class="material-icons text-amber-500 text-3xl">menu</span>`
    }
}

    window.addEventListener("load", () => {
        setTimeout(() => {
            const loader = document.getElementById("preloader");
            loader.classList.add("fade-out");
        }, 2000)
      });

clearTimeout(preloader)
AOS.init({
    duration: 1000,
    once: true,
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const hero = document.querySelector(".parallax");
    hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
  });

  menuBtn.addEventListener("click", toggleMenu)