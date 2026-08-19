// ===============================
// ELEMENT
// ===============================

const landing = document.getElementById("landing");
const giftPage = document.getElementById("giftPage");
const congratsPage = document.getElementById("congratsPage");
const galleryPage = document.getElementById("galleryPage");
const endingPage = document.getElementById("endingPage");

const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

const music = document.getElementById("bgMusic");


// ===============================
// FUNCTION
// ===============================

function hideAllPages(){

    landing.classList.add("hidden");
    giftPage.classList.add("hidden");
    congratsPage.classList.add("hidden");
    galleryPage.classList.add("hidden");
    endingPage.classList.add("hidden");

}


function showPage(page){

    hideAllPages();

    page.classList.remove("hidden");

    page.classList.add("fadeIn");

}



// ===============================
// OPEN GIFT BUTTON
// ===============================

openBtn.addEventListener("click", () => {

    showPage(giftPage);

    music.play();

    fadeMusic();

});




// ===============================
// CLICK GIFT
// ===============================

gift.addEventListener("click",()=>{

    gift.style.transform="scale(0.9) rotate(-8deg)";

    setTimeout(()=>{

        gift.style.transform="scale(1.1) rotate(8deg)";

    },150);

    setTimeout(()=>{

        gift.style.transform="scale(1)";

    },300);


    confetti({

        particleCount:180,

        spread:100,

        origin:{y:0.6}

    });


    setTimeout(()=>{

        showPage(congratsPage);

    },900);

});




// ===============================
// NEXT
// ===============================

nextBtn.addEventListener("click",()=>{

    showPage(galleryPage);

});




// ===============================
// FINISH
// ===============================

finishBtn.addEventListener("click",()=>{

    showPage(endingPage);

});
// =====================================
// MUSIC FADE IN
// =====================================

music.volume = 0;

function fadeMusic() {

    let volume = 0;

    let fade = setInterval(() => {

        if (volume < 1) {

            volume += 0.05;

            music.volume = volume;

        } else {

            clearInterval(fade);

        }

    }, 150);

}





// =====================================
// PHOTO POPUP
// =====================================

const photos = document.querySelectorAll(".photo img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.className = "popup";

        popup.innerHTML = `

        <div class="popup-content">

            <img src="${photo.src}">

        </div>

        `;

        document.body.appendChild(popup);

        popup.addEventListener("click", () => {

            popup.remove();

        });

    });

});



// =====================================
// RANDOM CONFETTI
// =====================================

function randomConfetti(){

    confetti({

        particleCount:80,

        spread:80,

        startVelocity:40,

        origin:{

            x:Math.random(),

            y:Math.random()-0.2

        }

    });

}



// =====================================
// EXTRA CONFETTI
// =====================================

gift.addEventListener("click",()=>{

    setTimeout(randomConfetti,300);

    setTimeout(randomConfetti,700);

    setTimeout(randomConfetti,1000);

});



// =====================================
// HEART CURSOR
// =====================================

document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="cursorHeart";

    heart.style.left=e.pageX+"px";

    heart.style.top=e.pageY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },900);

});



// =====================================
// PAGE FADE
// =====================================

document.querySelectorAll(".page").forEach(page=>{

    page.classList.add("fadeIn");

});



// =====================================
// FINISH MESSAGE
// =====================================

finishBtn.addEventListener("click",()=>{

    confetti({

        particleCount:250,

        spread:120,

        origin:{y:0.7}

    });

});



// =====================================
// END
// =====================================

console.log("Gift Website Ready ❤️");