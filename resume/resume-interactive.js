const nameFadeIN = () => {
    let name = document.getElementById("my-name")
    name.classList.add("animated", "infinite", "fadeIn")
    console.log (name)
}

const phoneNumberHide = () => {
    let number = document.getElementById("phone-number")
    number.style.visibility = "visible" 
    console.log(number)

}