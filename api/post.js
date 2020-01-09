import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'http://34.66.212.216',
    key: '750fdf336874ec95438b952db0',
    version: "v3"
  });

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch(err=> {
            console.error(err);
        })
}