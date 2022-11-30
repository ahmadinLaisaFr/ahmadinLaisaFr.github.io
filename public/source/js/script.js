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

// menu sidebar
let sidebarMenu = document.querySelector('#sidemenu')
let sidebarToggle = document.querySelector("#sidebar-toggle");
let sidebarToggleIcon = document.querySelector("#sidebar-toggle-icon");


sidebarToggle.addEventListener("click", () => {
    sidebarMenu.classList.toggle("-left-[2.6rem]");
    // sidebarMenu.style.transform = "translateX(-2.7rem)"
    // menuDrop.classList.remove('-right-36')
})

// window.addEventListener("click", (e) => {
//     alert(menuToggle + e.target)
// })