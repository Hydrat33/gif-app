import React from 'react'
import { GifGrid } from './GifGrid';
//import { getGifs } from './Helpers/getGifs'
import {useFetchGifs} from './useFetchGifs'
export const GifsCategories = ({category}) => {
    
   
    

    const {data:images,loading}=useFetchGifs(category)
   
    
    
    return (
        <>
         <h3>{category}</h3>
          
            <p>{loading?'loading...':'loading complete!'}</p>

            <div className="imgsGrid">

            {
                images.map((imgData)=>{
                    
                    return <GifGrid 
                                key={imgData.id}
                                {...imgData}
                            />
                                
                    
                })
            }
                
            </div>
               
            
        </>
    )
}

