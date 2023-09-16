/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ selectedCourse, remainingCredits, credits }) => {
    // console.log(remainingCredits);
    return (
        <div className="lg:col-span-3">

            <div className="w-full shadow-xl card bg-base-100">
                <div className="card-body">
                    <h1 className="text-lg font-bold text-center text-blue-600 ">Credit Hour Remaining {remainingCredits} hr</h1>
                    <h1 className='text-lg font-bold'>Course Name</h1>
                    <hr className='w-full h-1 mx-auto bg-gray-100 border-0 rounded' />
                    <ol id="cart-items" className="p-2 text-sm list-decimal md:p-4">
                        {
                            selectedCourse.map((c) => (
                                <li className='font-light' key={c.id}>{c.course_name}</li>
                            ))
                        }
                    </ol>
                    <hr className='w-full h-1 mx-auto bg-gray-100 border-0 rounded' />

                    <p className="font-medium ">Total credit Hour: {20 - remainingCredits}</p>
                    <hr className='w-full h-1 mx-auto bg-gray-100 border-0 rounded' />

                    <p className="font-medium">Total Price: { } USD</p>
                </div>
            </div>
        </div>
    );
};

export default Cart; 