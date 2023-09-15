/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse}) => {
    
    return (
        <div className="lg:col-span-3">
            <h1 className="py-2 mt-6 font-bold text-center md:mt-4 md:py-4">Credit Hour Remaining { } hr</h1>

            <div className="p-4 mt-6 bg-base-100 rounded-xl">

                <ol id="cart-items" className="p-2 md:p-4">
                    {
                        selectedCourse.map()
                    }
                </ol>
                <p className="font-medium ">Total credit Hour: { }</p>
                <p className="font-medium">Total Price: { } USD</p>

            </div>
        </div>
    );
};

export default Cart; 