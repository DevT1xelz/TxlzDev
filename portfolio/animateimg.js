document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            
            // Устанавливаем размеры изображения
            setTimeout(() => {
                const imgRatio = modalImg.naturalWidth / modalImg.naturalHeight;
                const screenRatio = window.innerWidth / window.innerHeight;

                if (imgRatio > screenRatio) {
                    modalImg.style.width = '100vw';
                    modalImg.style.height = 'auto';
                } else {
                    modalImg.style.width = 'auto';
                    modalImg.style.height = '100vh';
                }
            }, 100);
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function animateImage(image, direction) {
        image.style.transition = 'transform 0.5s ease-in-out';
        
        image.addEventListener('mouseover', () => {
            image.style.transform = `scale(1.1) rotate(${direction}5deg)`;
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    animateImage(images[0], '-');
    animateImage(images[1], '');
});