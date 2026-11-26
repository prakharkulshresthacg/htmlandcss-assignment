let bt = document.getElementById("btn")
let countText = document.getElementById("count")
console.log(bt)

let count = 0

bt.addEventListener("click", function () {
    count++
    bt.innerHTML = "clicked"
    bt.classList.toggle("clicked")
    countText.innerHTML = "Clicked " + count + " times"
})
