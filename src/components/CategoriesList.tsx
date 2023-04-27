import {IProps} from "../model/product";
import {useCallback, useEffect, useState} from "react";

const CategoriesList = ({goods}: IProps) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesClone = [...categories]
        for (const good of goods) {
            const catIdx = categoriesClone.findIndex(el => el.id === good.category.id)
            if (catIdx === -1) {
                categoriesClone.push({
                    id: good.category.id,
                    image: good.category.image,
                    name: good.category.name,
                    counter: 1,
                })
            } else {
                categoriesClone[catIdx].counter += 1
            }
            setCategories(categoriesClone)
        }
    },[])

    return (
        <>
            {
                categories.map(el => {
                    return (
                        <a
                            href={el.image}
                            key={el.id}
                            className={'search_box--item'}
                        >
                            <img
                                src={el.image}
                                alt={el.name}
                                className={'search_box--item_image'}
                            />
                            <span>
                                {el.name}
                            </span>
                            <span>
                                Количество совпадений: {el.counter}
                            </span>
                            <hr/>
                        </a>
                    )
                })
            }
        </>
    );
};

export default CategoriesList;
