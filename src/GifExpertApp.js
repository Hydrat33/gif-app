import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifsCategories } from './GifsCategories';

export function GifExpertApp(){

    const [categories, setCategory] = useState(['Vikings'])

    

    return  <>
            <h2>GifExpertApp</h2>
            <hr/>
           <AddCategory setCategories={setCategory} />


            <ol>
                {

                    categories.map((category)=><GifsCategories key={category} category={category}/>)

                }
            </ol>
            </>



}