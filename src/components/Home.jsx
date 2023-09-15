/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Home = () => {


    const [cards, setCards] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [credits, setTotalCredits] = useState(0)
    const [remainingCredits, setRemainingCredits] = useState(20)


    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    // console.log(cards);

    const handleSelectCourse = (course) => {
        // console.log(course);
        const doesExist = selectedCourse.find(i => i.id == course.id)
        let creditCount = course.credit_hours;

        // console.log(doesExist);
        if (doesExist) {
            return alert('booked')
        } else {
            setSelectedCourse([...selectedCourse, course])
        }
    }
    // console.log(selectedCourse);

    return (
        <div className="flex items-center justify-center">
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className="col-span-9">
                        <div className="grid grid-cols-3 gap-3 card-container">
                            {
                                cards.map((card) => (
                                    <div key={card.id} className="shadow-xl card bg-base-100">
                                        <div className="flex items-center justify-center px-8 py-8 m-3 bg-neutral-100 rounded-xl">
                                            <img src="https://i.ibb.co/JKJkXSm/rc.png" alt="Shoes" className="" />
                                        </div>
                                        <div className="items-center px-3 m-3 py- card-body">

                                            <h2 className="font-medium">{card.course_name}</h2>
                                            <p className="font-light text-justify">{card.short_details}</p>
                                            <div className='flex justify-around gap-3'>
                                                <div>
                                                    <p>Price: {card.price}</p>
                                                </div>
                                                <div>
                                                    <p>Credit: {card.credit_hours}</p>
                                                </div>
                                            </div>
                                            <div className='grid w-full'>
                                                <button onClick={() => handleSelectCourse(card)} className='btn btn-primary'>Select</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Cart selectedCourse={selectedCourse} remainingCredits={remainingCredits} credits={credits}></Cart>


                </div>
            </div>
        </div>
    );
};

export default Home;