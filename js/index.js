// just get input element
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);
function filterNames() {
   //get the value of input
   let filterValue = document.getElementById('filterInput').value.toUpperCase();
   //get names ul
   let ul = document.getElementById('names')
   //get list from ul
   let li = ul.querySelectorAll('li.collection-item');
   console.log(li[0].getElementsByTagName('a')[0])
   //Loop through collection-item li
   for(let i = 0; i < li.length; i++) {
       let a = li[i].getElementsByTagName('a')[0];
       // if matched
       if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
           //Show
           li[i].style.display = '';

       }else {
           li[i].style.display = 'none';
       }
   } 
}
