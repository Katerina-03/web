// gallery-script.js

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const galleryContainer = document.getElementById('galleryContainer');
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    async function fetchData(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    function renderGallery(data) {
        const first10Photos = data.slice(0, 10);
        first10Photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.title;
            galleryContainer.appendChild(img);
        });
    }

    function handleError(error) {
        console.error(error);
        preloader.innerHTML = 'Что-то пошло не так';
    }

    window.addEventListener('load', async function () {
        preloader.innerHTML = 'Loading...';
        preloader.style.color = 'white';

        try {
            const data = await fetchData(apiUrl);
            preloader.style.display = 'none';
            renderGallery(data);
        } catch (error) {
            handleError(error);
        }
    });
});
