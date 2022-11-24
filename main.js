const selectCircle = document.querySelector('.circle-calificacion');
const sutmit = document.querySelector('#sutmit');
const boxThank = document.querySelector('#rating-thank');
const boxRating = document.querySelector('#rating-select');
const addRating = document.querySelector('.add-rating');

selectCircle.addEventListener('click', event=>{
let numberSelected = event.target.innerText;
addRating.innerText = numberSelected;
console.log(numberSelected);
if(numberSelected > 0 || numberSelected <=5){
    sutmit.addEventListener('click', ()=>{
    boxThank.classList.add('rating');
    boxThank.classList.remove('inactive');
    boxRating.classList.add('inactive');
    boxRating.classList.remove('rating');
    })
}
});