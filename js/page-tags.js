const POSTS_PER_PAGE = 10;

document.addEventListener('DOMContentLoaded', async () => {
    const pathname = window.location.pathname;
    const pathParts = pathname.split('/').filter(Boolean);

    let tag = null;

    const tagIndex = pathParts.indexOf('tags');
    if (tagIndex !== -1 && pathParts[tagIndex + 1] && pathParts[tagIndex + 1] !== 'index.html') {
        tag = decodeURIComponent(pathParts[tagIndex + 1]);
    }

    if (!tag) {
        const urlParams = new URLSearchParams(window.location.search);
        tag = urlParams.get('tag');
    }

    if (!tag) {
        document.getElementById('tag-headline').textContent = 'Tag Not Found';
        document.getElementById('tag-description').textContent = 'No tag specified.';
        return;
    }

    document.title = `Tag: ${tag} - MD`;
    document.getElementById('tag-headline').textContent = `Tag: ${tag}`;
    document.getElementById('tag-description').textContent = `All the articles with the tag "${tag}".`;

    const posts = await PostLoader.fetchPosts();
    const taggedPosts = posts.filter(post => post.tags && post.tags.includes(tag));

    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get('page')) || 1;

    const totalPages = Math.ceil(taggedPosts.length / POSTS_PER_PAGE);
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const pagePosts = taggedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const postsContainer = document.getElementById('tag-posts');
    if (!pagePosts.length) {
        postsContainer.innerHTML = '<li class="no-posts">No posts found with this tag.</li>';
    } else {
        postsContainer.innerHTML = pagePosts.map(post => `
            <li>
                <div class="post-item">
                    <a href="../post/${encodeURIComponent(post.year)}/${encodeURIComponent(post.month)}/${encodeURIComponent(post.slug)}" class="post-link">
                        <h3>${escapeHtml(post.headline)}</h3>
                    </a>
                    <div class="post-meta">
                        <span class="date">
                            <time datetime="${escapeHtml(post.datetime)}">${PostLoader.formatDate(post.date)}</time>
                        </span>
                        <span class="read-time">- ${escapeHtml(post.readTime)}</span>
                    </div>
                    ${post.teaser ? `<p>${escapeHtml(post.teaser)}</p>` : ''}
                </div>
            </li>
        `).join('');
    }

    if (totalPages > 1) {
        const paginationContainer = document.getElementById('tag-pagination');
        let paginationHtml = '';

        const baseUrl = `?tag=${encodeURIComponent(tag)}`;

        if (currentPage > 1) {
            paginationHtml += `<a href="${baseUrl}&page=${currentPage - 1}" class="pagination-btn">&larr; Previous</a>`;
        }

        paginationHtml += `<span class="pagination-info">Page ${currentPage} of ${totalPages}</span>`;

        if (currentPage < totalPages) {
            paginationHtml += `<a href="${baseUrl}&page=${currentPage + 1}" class="pagination-btn">Next &rarr;</a>`;
        }

        paginationContainer.innerHTML = paginationHtml;
    }
});
