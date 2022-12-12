// darkmode toggle
let toggle = document.querySelector('#toggle')
let html = document.documentElement
let body = document.querySelector('body')
let scene = document.getElementById("scene")
    
const toggleDarkMode = () => {
    // ubah tema menjadi dark dan simpan data tema ke lokal storage
    if (toggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
        body.style.backgroundImage = "url(public/images/bg/bgdark.jpg)"
    } else {
        html.classList.remove("dark")
        localStorage.theme = "light"
        body.style.backgroundImage = "url(public/images/bg/bglight.jpg)"
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

// fullscreen toggle
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
    } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen()
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
    } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen()
        }
    }
})
// end fullscreen toggle

// menu dropdown android
let menuToggle = document.querySelector(".dropbtn")
let menuDrop = document.querySelector('#menu-drop')


menuToggle.addEventListener("click", () => {
    menuDrop.classList.toggle("opacity-0")
    menuDrop.classList.toggle("translate-x-40");  
})

// menu sidebar
let sidebarToggleIcon = document.querySelector("#sidebar-toggle-icon")
let sidebarToggle = document.querySelector("#sidebar-toggle")
let sidebarMenu = document.querySelector('#sidemenu')

// menu dropdown gotopage
let gotoPageToggle = document.querySelector("#goto-page-toggle")
let gotoPageDrop = document.querySelector('#goto-page-drop')
let bgblack = document.querySelector(".black-bg")


gotoPageToggle.addEventListener("click", () => {
  gotoPageDrop.classList.toggle("-translate-x-48");
})

sidebarToggle.addEventListener("click", () => {
  sidebarToggleIcon.classList.toggle("-rotat-180")
  sidebarMenu.classList.toggle("-translate-x-[3.9rem]")
  if (!gotoPageDrop.classList.contains("-translate-x-48")) {
    gotoPageDrop.classList.toggle("-translate-x-48");
  }
})

// end menu sidebar

// start to top

let toTop = document.getElementById("to-top")
let navbar = document.getElementById("navbar")
let contentAndroid = document.getElementById("content-android");

if (window.scrollY < 120) {
  toTop.classList.add("hidden")
}

window.onscroll = function() {
    if (window.scrollY > 120) {
      toTop.classList.remove("hidden")
    } else {
      toTop.classList.add("hidden")
    }
}
// end to top

// musik
let musikToggle = document.querySelector("#musik")
let musikControl = document.querySelector("#audio")
let musikClose = document.querySelector("#audioClose")

musikToggle.addEventListener("click", () => {
  musikControl.classList.toggle("-translate-y-16");
  musikControl.classList.toggle("-translate-y-72");
})

musikClose.addEventListener("click", () => {
  musikControl.classList.toggle("-translate-y-16");
  musikControl.classList.toggle("-translate-y-72");
})


// end musik

// sembunyikan elemen dropdown jika diklik disembarang tempat kecuali element pengaktif

window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    menuDrop.classList.add("opacity-0");
    menuDrop.classList.add("translate-x-40");
  }
}  

// if (!event.target.matches(".sidebar")) {
//   sidebarToggleIcon.classList.remove("-rotate-180");
//   sidebarMenu.classList.add("-translate-x-[3.7rem]");
// }
// if (!event.target.matches(".dropbtn")) {
//   menuDrop.classList.add("opacity-0");
//   menuDrop.classList.add("translate-x-40");
// }
// end sembunyikan elemen dropdown jika diklik disembarang tempat kecuali element pengakti