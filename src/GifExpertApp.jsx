import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    //console.log(categories);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        //categories.push(newCategory);
        //console.log(newCategory);
        
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
    };

    return (
        <>
            { /* Titulo */ }
            <h1>GifExpertApp</h1>

            { /* Input */ }
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { /* Listado de items */ }
            
            {
                // categories.map( (category) => {
                //     return (
                //         <GifGrid key={ category } />
                //     )
                // })
                //se puede simplificar asi
                categories.map( (category) => ( 
                    <GifGrid key={ category } category={ category } /> 
                ))
            }

            { /* Gif Item */ }
        </>
    );
};