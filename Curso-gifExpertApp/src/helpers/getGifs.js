
const getGifs = async(categori) => {

    const url = 'api.giphy.com/v1/gifs/search';
    const apikey = '5zhBBQiOnZ4UPrJ24rYitOpHtoGYP4T2';

    const resp = await fetch(`https://${url}?api_key=${apikey}&q=${encodeURI(categori)}&limit=10`);

    const {data} = await resp.json();

    const img = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return img;
}

export {getGifs};