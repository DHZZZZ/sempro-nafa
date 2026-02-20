const photos = document.querySelectorAll('.photo');
let index = 0;

setInterval(() => {
    photos.forEach(photo => photo.classList.remove('active'));
    photos[index].classList.add('active');
    index = (index + 1) % photos.length;
}, 3500);
