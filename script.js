const photos = document.querySelectorAll('.photo');
let index = 0;

setInterval(() => {
    photos.forEach(photo => {
        photo.classList.remove('active', 'fall');
    });

    const prev = index === 0 ? photos.length - 1 : index - 1;
    photos[prev].classList.add('fall');
    photos[index].classList.add('active');

    index = (index + 1) % photos.length;
}, 3200);
