const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")
//Add event listener
closedFace.addEventListener("click", () => {
   if (openFace.classList.contains("open")) {
      openFace.classList.add("active")
      closedFace.classList.remove("active")
   }
})
openFace.addEventListener("click", () => {
   if (closedFace.classList.contains("closed")) {
      closedFace.classList.add("active")
      openFace.classList.remove("active")
   }
})

const emoji = document.querySelectorAll(".emoji")
emoji.forEach((emoji) => {
   emoji.addEventListener("click", () => {
      const color = getRandomColor()
      emoji.style.backgroundColor = color
      document.body.style.background = color
      document.querySelectorAll("*").forEach((el) => {
         el.style.backgroundColor = color
      })
   })
})

function getRandomColor() {
   const letters = "0123456789ABCDEF"
   let color = "#"
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
   }
   return color
}
