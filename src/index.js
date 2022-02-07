console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then (res => res.json())
.then (dogs => console.log(dogs.message))
.catch(error => console.error(error))

function processDogImages(dogImages) {
   const container = document.querySelector("#dog-image-container")
   
    dogImages.forEach(dog => {
    const img = document.createElement('img')    
    img.src = dog    
    img.alt = "image of dog"    
    container.appendChild('img')        
})
}

fetch('https://dog.ceo/api/breeds/list/all')
.then (res => res.json)
.then(dogNames => console.log(dogNames))
.catch(error => console.error(error))