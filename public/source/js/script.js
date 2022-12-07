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
let fullscreen = document.querySelector('#fullscreen-toggle')
let fullscreenDesk = document.querySelector('#fullscreen-toggle-desk')

// android
fullscreen.addEventListener('click', () => {
    if (fullscreen.checked) {
        if (html.requestFullscreen) {
          html.requestFullscreen()
        } else if (html.webkitRequestFullscreen) {
          /* Safari */
          html.webkitRequestFullscreen()
        } else if (html.msRequestFullscreen) {
          /* IE11 */
          html.msRequestFullscreen()
        }
    }
})
// desktop
fullscreenDesk.addEventListener('click', () => {
    if (fullscreenDesk.checked) {
        if (html.requestFullscreen) {
          html.requestFullscreen()
        } else if (html.webkitRequestFullscreen) {
          /* Safari */
          html.webkitRequestFullscreen()
        } else if (html.msRequestFullscreen) {
          /* IE11 */
          html.msRequestFullscreen()
        }
    }
})
// fullscreen toggle

// end fullscreen toggle

// menu dropdown android
let menuToggle = document.querySelector("#menu-toggle")
let menuDrop = document.querySelector('#menu-drop')


menuToggle.addEventListener("click", () => {
    menuDrop.classList.toggle("opacity-0")
})
// menu dropdown gotopage
let gotoPageToggle = document.querySelector("#goto-page-toggle")
let gotoPageDrop = document.querySelector('#goto-page-drop')
let blur = document.querySelectorAll('.blur-section')


gotoPageToggle.addEventListener("click", () => {
    gotoPageDrop.classList.toggle("opacity-0")
})

// menu sidebar
let sidebarToggleIcon = document.querySelector("#sidebar-toggle-icon");
let sidebarToggle = document.querySelector("#sidebar-toggle")
let sidebarMenu = document.querySelector('#sidemenu')


sidebarToggle.addEventListener("click", () => {
    sidebarToggleIcon.classList.toggle("-rotate-180")
    sidebarMenu.classList.toggle("translate-x-10")
    blur.forEach((e) => {
        e.classList.toggle("blur-[2px]")
    })
    if (!gotoPageDrop.classList.contains("opacity-0")) {
        gotoPageDrop.classList.toggle("opacity-0")
    }
})
