
// ====SEARCH BOOK form ========================= 

let btnsearch = document.forms['search-form'].querySelector('.header-btn');
btnsearch.addEventListener('click', (ev) => e.target.preventDefault());


const searchforms = document.forms['search-form']; 
// =========== PREVENT FROM AUTO  REFRESH ==================
searchforms.addEventListener('submit', (e) => e.target.preventDefault() ); 

              // SEARCH BOOK  
let searchValue = document.forms['search-form'].querySelector('input');

 // ==============  JUST  SAVE  THE INPUT  HERE ====================
  searchValue.addEventListener('keyup',(e) =>{
// ==========JUST  SAVE  THE INPUT VALUE HERE =====================
      let inputValue = e.target.value.toLowerCase();
       
      let li  = document.querySelectorAll('ul, li')
       Array.from(li).forEach(function(libook){
         let liText = libook.firstElementChild.textContent; 
           if(liText.toLowerCase().indexOf(inputValue) != -1){
              libook.style.display = 'block';
           }else{
              libook.style.display = 'none';
           }
          

       });

  });


 
// HIDE ALL BOOK

let hideBook =  document.querySelector('#hide-book');
hideBook.addEventListener('change', () =>{
     if(hideBook.checked){
        lis.style.display = 'none';
     } else{
        lis.style.display = 'block';
  
     }

});
   
// CREATE DELETE BUTTON TO FUNCTION

const lis =document.querySelector('#main ul')
const btn = document.querySelectorAll('#main  li')
Array.from(btn).forEach(function(btns){
   lis.addEventListener('click', (e) =>{
          e.preventDefault()
         if(e.target.className == 'delete'){
             const li = e.target.parentElement;
                lis.removeChild(li);

       }
    const confirms = document.querySelector('ul, li')
    confirms.onclick = function(e){
   alert(`Are Sure You Want To  Delete......! `);

};

   });
});


// CREATE ADDED ELEMENT IN THE FORM

const addform = document.forms['add-form'];


addform.addEventListener('submit', function(e){
    e.preventDefault();
  let values = addform.querySelector('input[type="text"]').value;
  let inputs = addform.querySelector('input');
 

   

  // CREATE HTML  ELEMENT  HERE
  let li = document.createElement('li')
  liBook = document.createElement('span')
  deleteBtn = document.createElement('span')



// APPEND TEXTCONTENT
  liBook.textContent = values;
  liBook.className = 'li-book';

  // ADD CLASSSES
  deleteBtn.textContent = 'delete'
  deleteBtn.className = 'delete';


 // APPEND CHILD
  li.appendChild(liBook)
  li.appendChild(deleteBtn)
  lis.appendChild(li)
  addform.querySelector('input[type="text"]').value = null;

});


// COMFIRM DELETE




let myDate = document.querySelector('.my-Date')
let newDates = new Date();
myDate.textContent = newDates;
myDate.style.color = 'lightgray';




