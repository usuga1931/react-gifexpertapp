export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=Zx1l8ZqWjj7meuFCVTe5WrwWasJ2wexD`;
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}