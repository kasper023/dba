import * as React from "react";
import { AppContext } from "../../context/context";
import { Types } from "../../redux/reducers";
import s from "./Products.module.css"

const Products = () => {
    const { state, dispatch } = React.useContext(AppContext);

    return (
        <div className={s.Like}>
            <button onClick={() => {dispatch({type: Types.Add});}} >
                <img src={"https://pngimg.com/uploads/like/like_PNG17.png"}/>
            </button>
            {state.shoppingCart}
        </div>
    );
};

export default Products;
