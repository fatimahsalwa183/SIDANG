
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

function hideAllPages() {

    landing.classList.add("hidden");
    giftPage.classList.add("hidden");
    congratsPage.classList.add("hidden");
    galleryPage.classList.add("hidden");
    endingPage.classList.add("hidden");

}


function showPage(page) {

    hideAllPages();

    page.classList.remove("hidden");

    page.classList.add("fadeIn");

}


// ===============================
// OPEN GIFT BUTTON
// ===============================

openBtn.addEventListener("click", () => {

    showPage(giftPage);

    music.play().catch(() => {
        console.log("Music membutuhkan interaksi pengguna.");
    });

    fadeMusic();

});


// ===============================
// CLICK GIFT
// ===============================

gift.addEventListener("click", () => {

    // Gift animation
    gift.style.transform = "scale(0.9) rotate(-8deg)";

    setTimeout(() => {

        gift.style.transform = "scale(1.1) rotate(8deg)";

    }, 150);

    setTimeout(() => {

        gift.style.transform = "scale(1)";

    }, 300);


    // Main confetti
    confetti({

        particleCount: 180,

        spread: 100,

        origin: {
            y: 0.6
        }

    });


    // Extra confetti
    setTimeout(randomConfetti, 300);
    setTimeout(randomConfetti, 700);
    setTimeout(randomConfetti, 1000);


    // Move to congratulations page
    setTimeout(() => {

        showPage(congratsPage);

    }, 900);

});


// ===============================
// NEXT BUTTON
// ===============================

nextBtn.addEventListener("click", () => {

    showPage(galleryPage);

});


// ===============================
// FINISH BUTTON
// ===============================

finishBtn.addEventListener("click", () => {

    showPage(endingPage);


    // Final celebration
    confetti({

        particleCount: 250,

        spread: 120,

        origin: {
            y: 0.7
        }

    });

});


// =====================================
// MUSIC FADE IN
// =====================================

music.volume = 0;

function fadeMusic() {

    let volume = 0;

    const fade = setInterval(() => {

        if (volume < 1) {

            volume += 0.05;

            music.volume = Math.min(volume, 1);

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

                <img src="${photo.src}" alt="Memory">

            </div>

        `;

        document.body.appendChild(popup);


        // Close popup when clicked
        popup.addEventListener("click", () => {

            popup.remove();

        });

    });

});


// =====================================
// RANDOM CONFETTI
// =====================================

function randomConfetti() {

    confetti({

        particleCount: 80,

        spread: 80,

        startVelocity: 40,

        origin: {

            x: Math.random(),

            y: Math.random() - 0.2

        }

    });

}


// =====================================
// GRADUATION CURSOR EFFECT
// =====================================


document.addEventListener("mousemove", (e) => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.className = "cursorHeart";

    sparkle.style.left = e.pageX + "px";

    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);


    setTimeout(() => {

        sparkle.remove();

    }, 900);

});


// =====================================
// PAGE FADE
// =====================================

document.querySelectorAll(".page").forEach(page => {

    page.classList.add("fadeIn");

});


// =====================================
// END
// =====================================

console.log("Graduation Gift Website Ready 🎓");
```
