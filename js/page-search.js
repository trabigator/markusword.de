document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const emptyMessage = document.getElementById('search-empty');

    const posts = await PostLoader.fetchPosts();
    let filteredPosts = [];

    function renderResults(posts) {
        if (!posts.length) {
            resultsContainer.innerHTML = '';
            emptyMessage.classList.remove('hidden');
            return;
        }
        emptyMessage.classList.add('hidden');

        const pathname = window.location.pathname;
        const isSubDir = pathname.startsWith('/') && pathname.split('/').filter(Boolean).length > 1;
        const postBase = isSubDir ? '../post.html' : 'post.html';

        resultsContainer.innerHTML = posts.map(post => `
            <li>
                <div class="post-item">
                    <a href="${postBase}?year=${encodeURIComponent(post.year)}&slug=${encodeURIComponent(post.slug)}" class="post-link">
                        <h3>${escapeHtml(post.headline)}</h3>
                    </a>
                    <div class="post-meta">
                        <span class="date">
                            <time datetime="${escapeHtml(post.datetime)}">${PostLoader.formatDate(post.date)}</time>
                        </span>
                        <span class="read-time">- ${escapeHtml(post.readTime)}</span>
                    </div>
                    <p>${escapeHtml(post.teaser)}</p>
                </div>
            </li>
        `).join('');
    }

    function filterPosts(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        const qYear = q.match(/^(\d{4})$/);
        return posts.filter(post =>
            post.headline.toLowerCase().includes(q) ||
            (post.teaser && post.teaser.toLowerCase().includes(q)) ||
            (post.content && post.content.toLowerCase().includes(q)) ||
            post.date.toLowerCase().includes(q) ||
            (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q))) ||
            (qYear && post.year === qYear[1])
        );
    }

    searchInput.addEventListener('input', (e) => {
        filteredPosts = filterPosts(e.target.value);
        renderResults(filteredPosts);
    });

    renderResults([]);
});
