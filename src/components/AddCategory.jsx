import { useState } from "react"

/* 
Observaciones:
los atributos set, ejemplo setInputValue son asincronos
el onNewCategory es una funcion sincrona, por lo tanto
dentro del submit, se ejecutra lo sincrono y luego lo asincrono

*/

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}
