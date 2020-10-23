import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState("");
    
    const change=(e)=>{

        
        setInputValue(e.target.value);
    }

    const submitForm=(e)=>{

        e.preventDefault();
        if(inputValue.trim().length>2){
        setCategories(category=> [inputValue,...category]);
        setInputValue('');
        
    };
    };

    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                value={inputValue}
                onChange={change}
            ></input>
        </form>
    )

}
AddCategory.propTypes={

setCategories:PropTypes.func.isRequired    
    
    }