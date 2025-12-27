const typewriterElement = document.getElementById("typewriter")
const words = ["Student", "Programmer", "Ethical Hacker", "AI Enthusiast"]
let wordIndex = 0
let charIndex = 0
let isDeleting = false

function typewriter() {
  const currentWord = words[wordIndex]

  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % words.length
    }
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1)
    charIndex++

    if (charIndex === currentWord.length) {
      isDeleting = true
      setTimeout(typewriter, 2000)
      return
    }
  }

  setTimeout(typewriter, isDeleting ? 50 : 100)
}

typewriter()

// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Navbar background on scroll
const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 14, 39, 0.98)"
  } else {
    navbar.style.background = "rgba(10, 14, 39, 0.95)"
  }
})
