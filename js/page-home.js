document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.querySelector('#recent-posts ul');
    if (postsContainer) {
        const posts = await PostLoader.fetchPosts();
        PostLoader.renderPostList(posts.slice(0, 7), postsContainer);
    }
});
