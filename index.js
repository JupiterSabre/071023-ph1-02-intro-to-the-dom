const bodyDiv = document.querySelector(`body`)
const newDiv = document.createElement(`div`)
newDiv.setAttribute(`id`, `movie-posters`)
bodyDiv.append(newDiv)




// OR
function NewMovieInfo(image,title,description) {
    const createImg = document.createElement('img')
    createImg.src = image
    createImg.style.height = `200px`
    const createTitle = document.createElement('h2') 
    createTitle.textContent = title
    const createDescription = document.createElement('p')
    createDescription.textContent = description
    newDiv.append(createImg, createTitle, createDescription)

}



const movieOne = NewMovieInfo(`http://aggiecentral.com/wp-content/uploads/2017/02/beemovie.jpg`, `bee movie`, `movie about a bee`) 


const movieTwo = NewMovieInfo(`https://variety.com/wp-content/uploads/2015/05/centipede.jpg`,`The Human Centipede`,`A modern love story.`)

const movieThree = NewMovieInfo(`https://i.etsystatic.com/26593283/r/il/4f74ca/2911769448/il_1140xN.2911769448_hdnt.jpg`,`The Fly`,`A story about metamorphosis`)

console.log(document.querySelector(`#movie-posters`))


// console.log(movieOne)

// // RENDER IMAGES/DESCRIPTION/TITLES

// const newImgOne = document.createElement(`img`)
// newImgOne.src = `https://i.pinimg.com/564x/25/27/28/25272819613523317c02ac13684cbe53.jpg`
// newImgOne.setAttribute(`class`, `imgOne`)
// newDiv.append(newImgOne)
// const warDogsTitle = document.createElement(`h2`)
// warDogsTitle.innerText = `WAR DOGS`
// warDogsTitle.setAttribute(`class`, `imgOne`)
// newDiv.appendChild(warDogsTitle)
// const newP = document.createElement(`p`)
// newP.textContent = `Serious movie with Jonah Hill`
// newP.setAttribute(`class`, `imgOne`)
// newDiv.appendChild(newP)

// const imgOne = document.querySelectorAll(`.imgOne`)




// const newImgTwo = document.createElement(`img`)
// newImgTwo.src = `https://i.pinimg.com/564x/b6/20/d1/b620d19075cce46fdf8e22542b01a154.jpg`
// newDiv.append(newImgTwo)
// newImgTwo.setAttribute(`class`, `imgTwo`)
// const superBadTitle = document.createElement(`h2`)
// superBadTitle.innerText = `SUPER BAD`
// superBadTitle.setAttribute(`class`, `imgTwo`)
// newDiv.appendChild(superBadTitle)
// const secondP = document.createElement(`p`)
// secondP.textContent = `First movie with Jonah Hill`
// secondP.setAttribute(`class`, `imgTwo`)
// newDiv.appendChild(secondP)

// newImgTwo.src = `https://i.pinimg.com/originals/1c/9e/9f/1c9e9f45c9a8bd2935d08d444ea360fe.jpg`
// superBadTitle.textContent = `Blindness`
// secondP.textContent = `A movie adaptation of the book by Jose Saramago`



// const newImgThree = document.createElement(`img`)
// newImgThree.src = `https://i.pinimg.com/736x/61/ff/30/61ff307a8dd88665b549092df0a64f6a.jpg`
// newImgThree.setAttribute(`class`, `imgThree`)
// newDiv.append(newImgThree)
// const getGreek = document.createElement(`h2`)
// getGreek.innerText = `GET HIM TO THE GREEK`
// getGreek.setAttribute(`class`, `imgThree`)
// newDiv.appendChild(getGreek)
// const ThirdP = document.createElement(`p`)
// ThirdP.textContent = `The cocaine one with Jonah Hill`
// ThirdP.setAttribute(`class`, `imgThree`)
// newDiv.appendChild(ThirdP)


// const newDivOne = document.createElement('div');
// newDivOne.setAttribute('class', 'imgOne');
// newDivOne.appendChild(newImgOne);
// newDivOne.appendChild(warDogsTitle);
// newDivOne.appendChild(newP);
// newDiv.appendChild(newDivOne);

// const newDivTwo = document.createElement('div');
// newDivTwo.setAttribute('class', 'imgTwo');
// newDivTwo.appendChild(newImgTwo);
// newDivTwo.appendChild(superBadTitle);
// newDivTwo.appendChild(secondP);
// newDiv.appendChild(newDivTwo);

// const newDivThree = document.createElement('div');
// newDivThree.setAttribute('class', 'imgThree');
// newDivThree.appendChild(newImgThree);
// newDivThree.appendChild(getGreek);
// newDivThree.appendChild(ThirdP);
// newDiv.appendChild(newDivThree);

// // newDivThree.removeChild(newImgThree)

