'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden')
}


for (let i=0;i<btnsOpenModal.length;i++){
	btnsOpenModal[i].addEventListener('click', openModal)
}


// function to add hidden class
const closeModal = function add_hidden(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}



//add hidden class by clicking close button 
btnCloseModal.addEventListener('click', closeModal)


//add hidden class by clicking overlay area 
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(event){
	console.log(event)
	if (event.key === "Escape"){
		if ( !modal.classList.contains('hidden')){
			closeModal();
		}

	}
})