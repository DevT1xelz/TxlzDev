document.addEventListener('DOMContentLoaded', () => {
    const githubButton = document.querySelector('.github-button');

    githubButton.style.opacity = '1'; // Делаем кнопку видимой сразу

    githubButton.addEventListener('click', () => {
        window.open('https://github.com/DevT1xelz/TxlzDev', '_blank');
    });
});