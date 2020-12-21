import * as React from "react";
import { AppContext } from "./context";
import { Types } from "./reducers";

const Products = () => {
    const { state, dispatch } = React.useContext(AppContext);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({
                        type: Types.Add
                    });
                }}
            >
                Like
            </button>
            {state.shoppingCart}
        </div>
    );
};

export default Products;
