import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.some(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map(category =>(
                    /* estos () signigican que estamos retornando un 
                    nuevo objeto*/
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}

export default GitExpertApp
