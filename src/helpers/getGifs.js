
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=PTHXiZfBDAY5OxWuuzRuBfm9qX8N13pb&q=${category}&limit=10`
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))

    return gifs;
}