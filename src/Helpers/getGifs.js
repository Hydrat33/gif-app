
export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=OcB8FBvbSy3wGfNZvYToH6guRkg8Gwcu&q=${ encodeURI(category) }&limit=10`
    
    const resp= await fetch(url)
    const {data}= await resp.json()
    
    const dataFilter= data.map(gifInfo=>{

        return {

            id:gifInfo.id,
            title:gifInfo.title,
            imageUrl:gifInfo.images?.downsized.url,

        }

    })
     return dataFilter
        };