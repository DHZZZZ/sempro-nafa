const photos = document.querySelectorAll('.photo');
let index = 0;

setInterval(() => {
    photos.forEach(photo => {
        photo.classList.remove('active', 'fall');
    });

    if (index > 0) {
        photos[index - 1].classList.add('fall');
    } else {
        photos[photos.length - 1].classList.add('fall');
    }

    photos[index].classList.add('active');

    index = (index + 1) % photos.length;
}, 3200);
