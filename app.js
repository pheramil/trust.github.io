const toggleButton = document.getElementsByClassName("navbar-hamburger")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})