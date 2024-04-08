// let heading = document.createElement(h2)
// heading.innerHTML ="Passenger Details"
// function toggleBookingForm() {
//     var form = document.getElementById("bookingForm");
//     form.classList.toggle("hidden");
// }

// function data() {i
//     toggleBookingForm();
// // }
// function booking() {

//     let box= document.createElement("div");
//     box.classList.add("box");

//     let heading= document.createElement('h1')
//     heading.innerHTML="Tickets Booking from Hyd to";
//     parent.appendChild(heading);

    
// booking();


//     let

//     const userName = document.getElementById ("name").value
//     const Mobile = document.getElementById("phone").value
//     const userEmail = document.getElementById("email").value
//     const Place = document.getElementById("place").value
// }

function navSlide(){
    const nav = document.querySelector("herosection1");
    const menu = document.querySelector(".menu");
    const burger = document.querySelector(".burger");
    
 burger.addEventListener("click",()=>{
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

 })
}
navSlide();





const vizag = document.querySelector ("#vizInt")
const chennai = document.querySelector("#cheInt")
const banglore = document.querySelector("#banInt")
const kerala = document.querySelector("#kerInt")
const mumbai = document.querySelector("#mubInt")
const cgst = document.querySelector("#cgstInt")
const sgst = document.querySelector("#sgstInt")
const totalgst = document.querySelector("#totalInt")

const vizgBtn = document.getElementById('vizag-btn')
vizgBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = vizag.value * 5 / 100;
    cgst.value = CGST
    const SGST = vizag.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(vizag.value) + CGST+SGST;
    totalgst.value = Total
})

const chennaiBtn = document.getElementById('chennai-btn')
chennaiBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = chennai.value * 5 / 100;
    cgst.value = CGST
    const SGST = chennai.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(chennai.value) + CGST+SGST;
    totalgst.value = Total
})

const bangBtn = document.getElementById('bang-btn')
bangBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = banglore.value * 5 / 100;
    cgst.value = CGST
    const SGST = banglore.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(banglore.value) + CGST+SGST;
    totalgst.value = Total
})

const keralaBtn = document.getElementById('kerala-btn')
keralaBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = kerala.value * 5 / 100;
    cgst.value = CGST
    const SGST = kerala.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(kerala.value) + CGST+SGST;
    totalgst.value = Total
})

const mumbaiBtn = document.getElementById('mumbai-btn')
mumbaiBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = mumbai.value * 5 / 100;
    cgst.value = CGST
    const SGST = mumbai.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(mumbai.value) + CGST+SGST;
    totalgst.value = Total
})

 const paynow = document.getElementById("pay-btn");

 paynow.addEventListener('click',(e)=>{
     alert ("Booked successfully")
 })