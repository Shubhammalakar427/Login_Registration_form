const loginbtn=document.getElementById('login');
const rejisterbtn=document.getElementById('rejister');
const main=document.getElementsByClassName('main')[0];

loginbtn.addEventListener("click",()=>{
    main.classList.toggle('active');

})

rejisterbtn.addEventListener("click",()=>{
    main.classList.toggle('active');

})