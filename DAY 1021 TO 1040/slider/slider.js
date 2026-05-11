let next = document.querySelector('.next-slide');
let prev = document.querySelector('.prev-slide');
let heroTrack = document.querySelector('.hero-track');

next.onclick = function () {
    let items = document.querySelectorAll('.slide-card');
    heroTrack.appendChild(items[0]);
}

prev.onclick = function () {
    let items = document.querySelectorAll('.slide-card');
    heroTrack.prepend(items[items.length - 1]);
}
