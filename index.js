const days =document.getElementById("days");
const hours =document.getElementById("hours");
const minutes =document.getElementById("minutes");
const seconds =document.getElementById("seconds");

const CurrentYear = new Date().getFullYear();
// console.log(CurrentYear);

const newYearTime = new Date(`january 01 2024 ${CurrentYear - 1} 00:00:00`);

// console.log(newYearTime);

function updateCountDown(){
    const CurrentTime = new Date();
    const minus = newYearTime - CurrentTime;

    const d = Math.floor(minus / 1000 / 60 / 60 / 24);
    const h = Math.floor(minus / 1000 / 60 / 60) % 24;
    const m = Math.floor(minus / 1000 / 60 ) & 60;
    const s = Math.floor(minus / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML= s < 10 ? '0' + s : s;
}

setInterval(updateCountDown,1000);


/*  --------------------  Slider Image-------------- */
const Slides = document.querySelectorAll('.slide');
var counter = 0;

Slides.forEach(
    (slide, index) =>{
         slide.style.left = `${index * 100}%`
    }
);

const goNext = () => {
    if (counter < Slides.length - 1) {
    counter++;
    slideImage();
    }
    };
    const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
    };

const slideImage =() =>{
    Slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}


/*--------------------Table--------------*/
function calculateTotal(row) {
    const rate = document.getElementById(`rate${row}`).value;
    const quantity = document.getElementById(`quantity${row}`).value;
    const sgst = document.getElementById(`sgst${row}`).value;
    const cgst = document.getElementById(`cgst${row}`).value;
    const total = (rate * quantity) + (rate * quantity) * (sgst + cgst);
    document.getElementById(`total${row}`).innerHTML = total;
    updateGrandTotal();
  }

  function updateGrandTotal() {
    let grandTotal = 0;
    for (let i = 1; i <= 4; i++) {
      const total = document.getElementById(`total${i}`).innerHTML;
      grandTotal += parseFloat(total) || 0;
    }
    document.getElementById("grandTotal").innerHTML = grandTotal;
  }


  function calculateTotal(row) {
    const rate = document.getElementById(`rate${row}`).value;
    const quantity = document.getElementById(`quantity${row}`).value;
    const sgst = document.getElementById(`sgst${row}`).value;
    const cgst = document.getElementById(`cgst${row}`).value;
    const total = (rate * quantity) + (rate * quantity) * (sgst + cgst);
    document.getElementById(`total${row}`).innerHTML = total;
    updateGrandTotal();
  }
  function calculateTotal(row) {
    const rate = document.getElementById(`rate${row}`).value;
    const quantity = document.getElementById(`quantity${row}`).value;
    const sgst = document.getElementById(`sgst${row}`).value;
    const cgst = document.getElementById(`cgst${row}`).value;
    const total = (rate * quantity) + (rate * quantity) * (sgst + cgst);
    document.getElementById(`total${row}`).innerHTML = total;
    updateGrandTotal();
  }
  function calculateTotal(row) {
    const rate = document.getElementById(`rate${row}`).value;
    const quantity = document.getElementById(`quantity${row}`).value;
    const sgst = document.getElementById(`sgst${row}`).value;
    const cgst = document.getElementById(`cgst${row}`).value;
    const total = (rate * quantity) + (rate * quantity) * (sgst + cgst);
    document.getElementById(`total${row}`).innerHTML = total;
    updateGrandTotal();
  }
  
