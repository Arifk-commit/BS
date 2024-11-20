let arr = document.querySelectorAll(".appoint"); 
let conatiner_o_dent = document.querySelector(".container_o_dent")

// dentist appointment

let dent_over = document.querySelector("#dent_over ")
 dent_over.addEventListener("mouseenter",() =>{
    dent_over.classList.add("app")
   
 })
 dent_over.addEventListener("mouseleave",() =>{
    dent_over.classList.remove("app")
   
 })
 dent_over.addEventListener("click",()=>{
  const newlink1 =  document.createElement('a')
   newlink1.href = "https://chatgpt.com";
   
   conatiner_o_dent.appendChild(newlink1);
 })

//  dietitian appointment

let diet_over = document.querySelector("#diet_over ")
 diet_over.addEventListener("mouseenter",() =>{
    diet_over.classList.add("app")
   
 })
 diet_over.addEventListener("mouseleave",() =>{
    diet_over.classList.remove("app")
   
 })

//  surgeon appointment

let surg_over = document.querySelector("#surg_over ")
 surg_over.addEventListener("mouseenter",() =>{
    surg_over.classList.add("app")
   
 })
 surg_over.addEventListener("mouseleave",() =>{
    surg_over.classList.remove("app")
   
 })

// for (const el of arr) {
//     el.addEventListener("mouseover" ,()=>{
        
//     })
// }
