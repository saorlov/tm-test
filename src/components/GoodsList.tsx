import {IProps} from "../model/product";

const GoodsList = ({goods}: IProps) => {
    return (
        <>
            {
                goods.map(el => {
                    return (
                        <a
                            href={el.images[0]}
                            key={el.id}
                            className={'search_box--item'}
                        >
                            <img
                                src={el.images[0]}
                                alt={el.title}
                                className={'search_box--item_image'}
                            />
                            <span>
                                {el.title}
                            </span>
                            <span>
                                ${el.price}
                            </span>
                        </a>
                    )
                })
            }
        </>
    );
};

export default GoodsList;
