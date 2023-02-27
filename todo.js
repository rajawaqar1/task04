console.log("welcome to Js.....");

// const Add = document.getElementsByClassName("submit_btn");
const tbodyEl=document.querySelector('tbody');
const table=document.querySelector("table");

// form.addEventListner("submit",onAddWebsite)

function onAddWebsite(){
//   e.preventDefault();
//   alert("work")
console.log("submitted")

 const name=document.getElementById('name').value;
 const age=document.getElementById('age').value;
 const reg=document.getElementById('regno').value;
 
 tbodyEl.innerHTML+=`
 <tr>
 <td>Name: <input type="text" id="name" placeholder="${name}"></td>
 <td> Age:   <input type="text" id="age" placeholder="Age"></td>
 <td>Reg no:   <input type="text" id="regno" placeholder="registration number"></td>
 <td><button class="delete_btn">Delete</button></td>
 </tr>

 `
}

// tbodyEl.innerHTML+=`
// <tr>
// <td>${name}</td>
// <td>${age}</td>
// <td>${reg}</td>
// <td><button class="delete_btn">Delete</button></td>
// </tr>

// `
// }



 function onDeleteRow(e){
 if(!e.target.classList.contains('delete_btn')){
     return;
 }
 const btn=e.target;
 btn.closest('tr').remove();
 // alert("Working")
 }
table.addEventListener("click",onDeleteRow);