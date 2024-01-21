const toggle = document.querySelector("#toggle")
let toggleLabel = document.querySelector(".toggle--dark")
let pattern = document.querySelector(".bg-pattern")
let body = document.querySelector(".body__dark")
let h5 = document.querySelector("h5")
let mainFollowersCard = document.querySelectorAll(".main__followers--media") 
let mainLikesCard = document.querySelectorAll(".main__likes--card")
let cardText = document.querySelectorAll(".card__text") 
let facebookAccount = document.querySelector(".facebook--account")
let twitterAccount = document.querySelector(".twitter--account") 
let instagramAccount = document.querySelector(".instagram--account")
let youtubeAccount = document.querySelector(".youtube--account") 


toggle.addEventListener("click", function(e){
    pattern.classList.toggle("bg-pattern-L")
    body.classList.toggle("body__light")
    
    //cardText.classList.toggle("card__text-L")
    toggleLabel.classList.toggle("toggle--light")
    h5.classList.toggle("light-theme")

    facebookAccount.classList.toggle("facebook--account-L")
    twitterAccount.classList.toggle("twitter--account-L")
    instagramAccount.classList.toggle("instagram--account-L")
    youtubeAccount.classList.toggle("youtube--account-L")

    //change color in light mode for all divs with class "main__followers--media"
    for (let i = 0; i < mainFollowersCard.length; i++) {
          mainFollowersCard[i].classList.toggle("main__followers--media-L")
        }
        
    //change color in light mode for all divs with class "main__likes--card"
    for (let i = 0; i < mainLikesCard.length; i++) {
        mainLikesCard[i].classList.toggle("main__likes--card-L")
        }
    
    //change color in light mode for all divs with class "main__likes--card"
    for (let i = 0; i < cardText.length; i++) {
        cardText[i].classList.toggle("card__text-L")
        }

   
})
