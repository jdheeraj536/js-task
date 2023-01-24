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

