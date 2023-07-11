
const pTag = document.querySelectorAll(`p`)
console.log(pTag)

const description = document.querySelector(`.description`)

const newImg = document.createElement(`img`)
newImg.src = `https://i.pinimg.com/564x/ac/7e/aa/ac7eaa883e8c0cc38ba5a1545cfbde0d.jpg`
description.appendChild(newImg)

const imageTwo = document.createElement(`img`)
imageTwo.src = `https://i.pinimg.com/564x/60/ed/d7/60edd715c80a0c64d610585840b705a8.jpg`
description.append(imageTwo)

const bodyDiv = document.querySelector(`body`)
const newDiv = document.createElement(`div`)
newDiv.setAttribute(`id`, `movie-posters`)
bodyDiv.append(newDiv)



// RENDER IMAGES/DESCRIPTION/TITLES



const newImgOne = document.createElement(`img`)
newImgOne.src = `https://i.pinimg.com/564x/25/27/28/25272819613523317c02ac13684cbe53.jpg`
newDiv.append(newImgOne)
newImgOne.setAttribute(`class`, `imgOne`)
const warDogsTitle = document.createElement(`h2`)
warDogsTitle.innerText = `WAR DOGS`
warDogsTitle.setAttribute(`class`, `imgOne`)
newDiv.appendChild(warDogsTitle)
const newP = document.createElement(`p`)
newP.textContent = `Serious movie with Jonah Hill`
newP.setAttribute(`class`, `imgOne`)
newDiv.appendChild(newP)



const newImgTwo = document.createElement(`img`)
newImgTwo.src = `https://i.pinimg.com/564x/b6/20/d1/b620d19075cce46fdf8e22542b01a154.jpg`
newDiv.append(newImgTwo)
newImgTwo.setAttribute(`class`, `imgTwo`)
const superBadTitle = document.createElement(`h2`)
superBadTitle.innerText = `SUPER BAD`
superBadTitle.setAttribute(`class`, `imgTwo`)
newDiv.appendChild(superBadTitle)
const secondP = document.createElement(`p`)
secondP.textContent = `First movie with Jonah Hill`
secondP.setAttribute(`class`, `imgTwo`)
newDiv.appendChild(secondP)


const newImgThree = document.createElement(`img`)
newImgThree.src = `https://i.pinimg.com/736x/61/ff/30/61ff307a8dd88665b549092df0a64f6a.jpg`
newImgThree.setAttribute(`class`, `imgThree`)
newDiv.append(newImgThree)
const getGreek = document.createElement(`h2`)
getGreek.innerText = `GET HIM TO THE GREEK`
getGreek.setAttribute(`class`, `imgThree`)
newDiv.appendChild(getGreek)
const ThirdP = document.createElement(`p`)
ThirdP.textContent = `The cocaine one with Jonah Hill`
ThirdP.setAttribute(`class`, `imgThree`)
newDiv.appendChild(ThirdP)


// This code wraps each movie img, title & description in a div

const newDivOne = document.createElement('div');
newDivOne.setAttribute('class', 'imgOne');
newDivOne.appendChild(newImgOne);
newDivOne.appendChild(warDogsTitle);
newDivOne.appendChild(newP);

const newDivTwo = document.createElement('div');
newDivTwo.setAttribute('class', 'imgTwo');
newDivTwo.appendChild(newImgTwo);
newDivTwo.appendChild(superBadTitle);
newDivTwo.appendChild(secondP);
newDiv.appendChild(newDivTwo);

const newDivThree = document.createElement('div');
newDivThree.setAttribute('class', 'imgThree');
newDivThree.appendChild(newImgThree);
newDivThree.appendChild(getGreek);
newDivThree.appendChild(ThirdP);
newDiv.appendChild(newDivThree);


