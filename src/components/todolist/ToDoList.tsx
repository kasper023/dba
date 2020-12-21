import React from "react";
import { AppContext } from "../context/context";
import { Types } from "../redux/reducers";
import s from "./ToDoList.module.css"

const ToDoList = () => {
    const [form, setForm] = React.useState({
        name: "",
        price: 0
    });
    const { state ,dispatch } = React.useContext(AppContext);

    const handleForm = (type: string, value: string) => {
        setForm(form => ({
            ...form,
            [type]: value
        }));
    };

    const createProduct = () => {
        dispatch({
            type: Types.Create,
            payload: {
                id: Math.round(Math.random() * 10000),
                name: form.name,
                price: form.price
            }
        });
    };

    const deleteProduct = (id: number) => {
        dispatch({
            type: Types.Delete,
            payload: {
                id,
            }
        })
    }

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>To Do List</h1>
            <div className={s.forms}>
            <input value={form.name} onChange={e => {
                    handleForm("name", e.target.value);
                }}
                placeholder="What should i do"/>


            <input value={form.price} type="number" onChange={e => {
                    handleForm("price", e.target.value);
                }}
                placeholder="Points I Get "/>

                <button className={s.button} onClick={createProduct}>Add</button>
                </div>
            <div >
                {state.products.map(c => (
                    <div>
                        <div>
                            To Do:
                        {c.name}
                        </div>
                        <div>
                            Points that you get:
                        {c.price} points
                        </div>
                        <button className={s.button} onClick={() => deleteProduct(c.id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
