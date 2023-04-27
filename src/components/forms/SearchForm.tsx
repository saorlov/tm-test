import {ChangeEvent, useContext, useEffect, useState} from "react";
import {BiSearch} from "react-icons/bi"
import axios from 'axios'
import {from, map} from 'rxjs'
import {IProduct} from "../../model/product";
import Overlay from "../Overlay";
import {SearchContext} from "../../context/contexts";

const SearchForm = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<IProduct[]>([])
    const [filteredGoods, setFilteredGoods] = useState<IProduct[]>([])
    const ctx = useContext(SearchContext)

    const showOverlay = ctx.isOpened && filteredGoods.length

    useEffect(() => {
        const $goods = from(axios.get('https://api.escuelajs.co/api/v1/products'))
            .pipe(map((res: {data: IProduct[]}) => res.data))
        $goods.subscribe(res => setProducts(res))
    },[])

    useEffect(() => {
        if (!searchQuery) {
            setFilteredGoods([])
            return
        }
        setFilteredGoods(products.filter(el => el.title.toLowerCase().includes(searchQuery.toLowerCase())))
    }, [searchQuery])

    useEffect(() => {
        ctx.setOpened()
    }, [filteredGoods])

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const focusHandler = () => {
        if (filteredGoods) ctx.setOpened()
    }

    return (
        <div className={'block'}>
            <div
                className={'search_box'}
            >
                <input
                    className={'search_box--input_field'}
                    value={searchQuery}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                    placeholder={'Поиск'}
                    type="text"
                />
                <div className={'search_box--icon'}>
                    <BiSearch />
                </div>
                {showOverlay ? <Overlay goods={filteredGoods} /> : ''}
            </div>

        </div>
    );
};

export default SearchForm;
