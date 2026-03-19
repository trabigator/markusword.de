// Shared page initialisation — back-to-top button and back-link navigation.
// Loaded on every page via <script src="/js/init.js" defer>.

document.addEventListener('DOMContentLoaded', () => {
    // Back-to-top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Back link — falls back to home when there is no history to go back to
    const backLink = document.getElementById('back-link');
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (history.length > 1) {
                history.back();
            } else {
                window.location.href = '/';
            }
        });
    }
});
