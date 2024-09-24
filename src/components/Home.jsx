import React from "react";
import Header from "./Header";
import Card from "./Card";

function Home({allProducts, onAddClick, quantityElements}) {
    const [category, setCategory] = React.useState("")
    const [sortParam, setSortParam] = React.useState("")

    const onCategClick = (category) => {
      setCategory(category)
    }
  
    return(
        <div>
            <div className="wrapper">
                <Header quantityElements={quantityElements}/>
            <div className="content">
              <div className="container">
                <div className="content__top">
                  <div className="categories">
                    <ul>
                      <li onClick={() => onCategClick("")} className={category === "" ? "active": ""}>Все</li>
                      <li onClick={() => onCategClick("meat")} className={category === "meat" ? "active": ""}>Мясные</li>
                      <li onClick={() => onCategClick("veget")} className={category === "veget" ? "active": ""}>Вегетарианская</li>
                      <li onClick={() => onCategClick("grill")} className={category === "grill" ? "active": ""}>Гриль</li>
                      <li onClick={() => onCategClick("sharp")} className={category === "sharp" ? "active": ""}>Острые</li>
                      <li onClick={() => onCategClick("closed")} className={category === "closed" ? "active": ""}>Закрытые</li>
                    </ul>
                  </div>
                  <div className="sort">
                    <div className="sort__label">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                          fill="#2C2C2C"
                        />
                      </svg>
                      <b>Сортировка по:</b>
                      <span>популярности</span>
                    </div>
                    <div className="sort__popup">
                      <ul>
                        <li className="active">популярности</li>
                        <li>цене</li>
                        <li>алфавиту</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                  {allProducts.filter(element => element.category.includes(category)).map(prod => {                   
                    return(
                      <div>
                        <Card
                          prod={prod}
                          onAdd={(addProd) => onAddClick(addProd)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Home
