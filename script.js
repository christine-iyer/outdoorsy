const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

// round cards functionality 
const level = [1,2,3,4,5,6,7,8];

level.forEach(cardsRound => console.log(cardsRound +2));



//Link text
playerLivesCount.textContent = playerLives;
const getData = ()=> [
{ imgSrc: src='images/a.png', name: 'a'},
{ imgSrc: src='images/a.png', name: 'a', name: 'b'},
{ imgSrc: src='images/a.png', name: 'a', name: 'c'},
{ imgSrc: src='images/a.png', name: 'a', name: 'd'},
{ imgSrc: src='images/a.png', name: 'a', name: 'e'},
{ imgSrc: src='images/a.png', name: 'a', name: 'f'},
{ imgSrc: src='images/a.png', name: 'a', name: 'g'},
{ imgSrc: src='images/a.png', name: 'a', name: 'k'},
{ imgSrc: src='images/a.png', name: 'a', name: 'a'},
{ imgSrc: src='images/a.png', name: 'a', name: 'b'},
{ imgSrc: src='images/a.png', name: 'a', name: 'c'},
{ imgSrc: src='images/a.png', name: 'a', name: 'd'},
{ imgSrc: src='images/a.png', name: 'a', name: 'e'},
{ imgSrc: src='images/a.png', name: 'a', name: 'f'},
{ imgSrc: src='images/a.png', name: 'a', name: 'g'},
{ imgSrc: src='images/a.png', name: 'a', name: 'k'}
]
//randomize
const randomize = ()=>{
     const cardData = getData();
     cardData.sort(()=> Math.random() - 0.5);
     return cardData;
};
randomize();
// card generator function
const cardGenerator = ()=> {
     const cardData = randomize();
     // generate html 
     cardData.forEach(item=> {
     const card = document.createElement('div');
     const face = document.createElement('img');
     const back = document.createElement('div');
     card.classList='card';
     face.classList='face';
     back.classList ='back';
     //attach info to cards
          face.src = item.imgSrc;

     //attach the cards to the section
     section.appendChild(card);
     card.appendChild(face);
     card.appendChild(back);
     //eventListener
     card.addEventListener('click', (event) => {
          card.classList.toggle('toggleCard')

     } )

     })
     console.log(cardData);
     
     
     

};
cardGenerator();

//attach card to section
