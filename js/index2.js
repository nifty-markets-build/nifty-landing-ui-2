//clicking logo refreshes page
const logoRefresh = document.querySelector('.nav-logo');
logoRefresh.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});