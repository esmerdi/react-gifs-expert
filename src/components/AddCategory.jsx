import { useState } from 'react'



export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim() <= 1) return;
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}
