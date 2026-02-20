const photos = document.querySelectorAll('.photo');
let index = 0;

setInterval(() => {
    photos.forEach(photo => {
        photo.classList.remove('active', 'fall');
    });

    const prevIndex = index === 0 ? photos.length - 1 : index - 1;
    photos[prevIndex].classList.add('fall');
    photos[index].classList.add('active');

    index = (index + 1) % photos.length;
}, 3200);
