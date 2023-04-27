export interface IProduct {
    "id": string,
    "title": string,
    "price": string,
    "description": string,
    "category": {
        "id": string,
        "name": string,
        "image": string
    },
    "images": [
        string,
        string,
        string
    ]
}

export interface IProps {
    goods: IProduct[]
}

export interface ISearchContextInitials {
    isOpened: boolean;
    setOpened: () => void,
    setClosed: () => void,
}


