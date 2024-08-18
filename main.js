// const countdown = document.querySelector('.time');
// const targetDate = new Date('2024-09-01T00:00:00');
 
// function updateCountdown() {
//   const now = new Date();
//   const remainingTime = targetDate - now;
 
//   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
// //   const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //   const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
// //   const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//   document.getElementById('days').innerText = days.toString().padStart(2, '0');
// //   document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
// //   document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
// //   document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

// }
// // Обновляем счетчик каждую секунду
// setInterval(updateCountdown, 1000);

let clickCount = 0;

document.getElementById("v12").addEventListener("click", function() {
    clickCount++;

    if(clickCount === 12) {

        let video = document.getElementById("video");

        video.style.display = "block";
        
        video.play();

        video.onended = function() {
            video.style.display = "none";
        };

        clickCount = 0;
    }
});