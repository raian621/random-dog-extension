const maxWidth = 800
const maxHeight = 600

const dogImageElem = document.querySelector('#dog-picture')

function addDogPicture(pictureUrl) {
  dogImageElem.src = pictureUrl
}

async function getDogPicture() {
  try {
    response = await fetch('https://dog.ceo/api/breeds/image/random')
    data = await response.json()
    return data.message
  } catch (error) {
    console.error(error)
  }
}

getDogPicture().then(url => {
  addDogPicture(url)
})