document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.querySelector('#all-posts ul');
    if (postsContainer) {
        const posts = await PostLoader.fetchPosts();
        PostLoader.renderGroupedPosts(posts, postsContainer);
    }
});
