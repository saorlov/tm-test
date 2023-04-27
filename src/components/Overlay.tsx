import {IProps} from "../model/product";
import {useContext, useRef, useState} from "react";
import CategoriesList from "./CategoriesList";
import GoodsList from "./GoodsList";
import {useOutsideClickDetector} from "../hooks/useOutsideClickDetector";
import {SearchContext} from "../context/contexts";



const Overlay = ({goods}: IProps) => {

    const [tab, setTab] = useState('categories')
    const ref = useRef(null)
    const ctx = useContext(SearchContext)
    useOutsideClickDetector(ref, ctx.setClosed)

    const clickHandler = () => {
        setTab(state => {
            if (state === 'categories') return 'goods'
            return 'categories'
        })
    }

    return (
        <div
            ref={ref}
            className={'search_box--overlay'}
        >
            <div className={'search_box--overlay_inner'}>
                <div className={'search_box--tabs'}>
                    <button
                        style={
                            tab === 'categories'
                            ?
                            {backgroundColor: 'lightblue'}
                            :
                            {backgroundColor: 'transparent'}
                        }
                        onClick={clickHandler}
                        className={'search_box--tab_button'}
                    >
                        Категории
                    </button>
                    <button
                        style={
                            tab === 'goods'
                            ?
                            {backgroundColor: 'lightblue'}
                            :
                            {backgroundColor: 'transparent'}
                        }
                        onClick={clickHandler}
                        className={'search_box--tab_button'}
                    >
                        Товары
                    </button>
                </div>
                <div className={'search_box--items'}>
                    {
                        tab === 'categories' ?
                            <CategoriesList goods={goods} />
                            :
                            <GoodsList goods={goods} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Overlay;
