import React from "react";

function Card({prod, onAdd}) {
    const [size, setSize] = React.useState(26)
    const [doughType, setDoughType] = React.useState("delicate")
    const [count, setCount] = React.useState(0)

    const onAddClick = (addProd) => {       
        onAdd(addProd)
    }

    return(
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={prod.imgUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{prod.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    <li onClick={() => setDoughType("delicate")} className={doughType === "delicate" ? "active": ""}>тонкое</li>
                    <li onClick={() => setDoughType("trad")} className={doughType === "trad" ? "active": ""}>традиционное</li>
                </ul>
                <ul>
                    <li onClick={() => setSize(26)} className={size === 26 ? "active": ""}>26 см.</li>
                    <li onClick={() => setSize(30)} className={size === 30 ? "active": ""}>30 см.</li>
                    <li onClick={() => setSize(40)} className={size === 40 ? "active": ""}>40 см.</li>
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{prod.price}</div>
                <div onClick={() => 
                        onAddClick(
                            {"name": prod.name, "price": prod.price, "imgUrl": prod.imgUrl, "category": prod.category, "doughType": doughType, "size": size, "key": prod.key}
                        )} 
                        className="button button--outline button--add"
                    >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                    </svg>
                    <span onClick={() => setCount(count + 1)}>Добавить</span>
                    {count > 0 ? <i>{count}</i>: ""}
                </div>
            </div>
        </div>
    )
}

export default Card