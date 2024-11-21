// ** animation in the appointment part  **//

// seprate code for each appointment 

// let appoints = document.querySelectorAll(".appoint"); 

// // dentist appointment

// let dent_over = document.querySelector("#dent_over ")
//  dent_over.addEventListener("mouseenter",() =>{
//     dent_over.classList.add("cl")
   
//  })
//  dent_over.addEventListener("mouseleave",() =>{
//     dent_over.classList.remove("cl")
   
//  })
 
// //  dietitian appointment

// let diet_over = document.querySelector("#diet_over ")
//  diet_over.addEventListener("mouseenter",() =>{
//     diet_over.classList.add("cl")
   
//  })
//  diet_over.addEventListener("mouseleave",() =>{
//     diet_over.classList.remove("cl")
   
//  })

// //  surgeon appointment

// let surg_over = document.querySelector("#surg_over ")
//  surg_over.addEventListener("mouseenter",() =>{
//     surg_over.classList.add("cl")
   
//  })
//  surg_over.addEventListener("mouseleave",() =>{
//     surg_over.classList.remove("cl")
   
//  })


// using for loop //

let appoints = document.querySelectorAll(".appointment")
for (const appoint of appoints) {
    appoint.addEventListener("mouseenter" ,()=>{
        appoint.classList.add("cl");
    })
    appoint.addEventListener("mouseleave" ,()=>{
        appoint.classList.remove("cl");
    })
    
}


// Animation for footer part 

let links = document.querySelectorAll(".link");
for (const link of links) {
   link.addEventListener("mouseenter",()=>{
      link.classList.add("cl2")
      // link.style.textDecoration = 'underline';
   
   });
   link.addEventListener("mouseleave", ()=>{
      link.classList.remove("cl2")
   })
   
}
let links2 = document.querySelectorAll(".link2");
for (const link2 of links2) {
   link2.addEventListener("mouseenter",()=>{
      link2.classList.add("cl2")
      // link.style.textDecoration = 'underline';
   
   });
   link2.addEventListener("mouseleave", ()=>{
      link2.classList.remove("cl2")
   })
   
}