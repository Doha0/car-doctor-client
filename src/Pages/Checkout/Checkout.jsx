// import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price } = service;


    const handelBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        // console.log(order);
    }

    return (
        <div>
            <h2 className="text-center text-3xl">Book service:{title} </h2>

            <form onSubmit={handelBookService} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary bg-orange-600 border-orange-600 btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;