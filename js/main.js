console.log("JS file included")

// when clicking on the main h1 title of the page, changes the font color to blue
const title = document.querySelector("h1")

title.addEventListener("click", function() {
    title.style.color = "blue"
})

// when clicking on the heart icon on the cat image, adds/removes the .liked class to change the fill color depending on whether or not the class is already applied to the heart or not
const like = document.getElementById("like")

like.addEventListener("click", function(event) {
    event.target.classList.toggle("liked")
})

document.addEventListener("keydown", function(event) {
    console.log(event.key)
})

// Adding event listener to multiple elements 
const tasks = document.getElementById("todolist").children

function completeTask (event) {
    const task = event.target
    task.classList.toggle("done")
}

for (const task of tasks) {
    task.addEventListener("click", completeTask)
}

// Event Delegation  
const groceryList = document.getElementById("grocerieslist")

groceryList.addEventListener("click", addToCart)

function addToCart(event) {
//     const item = event.target
//     if (item.classList.contains("item")) {
//         item.insertAdjacentHTML("beforeend", `<span>🛒</span>`)
//     }

const item = event.target.closest(".item")
     if (item) {
         item.insertAdjacentHTML("beforeend", `<span>🛒</span>`)
     }
}

const form = document.getElementById("groceryForm")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const elements = form.elements

    for (const element of elements) {
        console.log(element.name)
        if (element.name == "groceryItem" && element.value !== "") {
            groceryList.insertAdjacentHTML("beforeend", `<li class="item">${element.value}</li>`)
            form.reset()
        }
    }
})



