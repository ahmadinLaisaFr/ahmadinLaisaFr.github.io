// darkmode toggle
let toggle = document.querySelector('#toggle')
let html = document.documentElement

const toggleDarkMode = () => {
    // ubah tema menjadi dark dan simpan data tema ke lokal storage
    if (toggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove("dark")
        localStorage.theme = "light"
    }

}
toggle.addEventListener('click', toggleDarkMode)

// pindahkan posisi switcher ke posisi yang sesuai dengan tema
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    toggle.checked = true
} else {
    toggle.checked = false
}
// end darkmode toggle

// menu dropdown android
let menuToggle = document.querySelector("#menu-toggle");
let menuDrop = document.querySelector('#menu-drop')


menuToggle.addEventListener("click", () => {
    menuDrop.classList.toggle("opacity-0")
    // menuDrop.classList.remove('-right-36')
})
// menu dropdown gotopage
let gotoPageToggle = document.querySelector("#goto-page-toggle");
let gotoPageDrop = document.querySelector('#goto-page-drop')
let blur = document.querySelectorAll('.blur-section')


gotoPageToggle.addEventListener("click", () => {
    // blur.classList.toggle("blur-[2px]");
    gotoPageDrop.classList.toggle("opacity-0");
  // menuDrop.classList.remove('-right-36')
});

// menu sidebar
let sidebarToggle = document.querySelector("#sidebar-toggle");
let sidebarMenu = document.querySelector('#sidemenu')


sidebarToggle.addEventListener("click", () => {
    sidebarMenu.classList.toggle("-left-[2.6rem]");
    blur.forEach((e) => {
        e.classList.toggle("blur-[1px]");
    });
    if (!gotoPageDrop.classList.contains("opacity-0")) {
        gotoPageDrop.classList.toggle("opacity-0");
    }
    // sidebarMenu.style.transform = "translateX(-2.7rem)"
    // menuDrop.classList.remove('-right-36')
})
