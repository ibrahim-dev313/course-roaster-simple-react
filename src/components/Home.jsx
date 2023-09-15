/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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
            toast.error('Course Already Booked')
        } else {
            selectedCourse.forEach(i => {
                if(creditCount<20){
                creditCount = creditCount + i.credit_hours;

                } else{
                    return
                }
            })
            const totalRemaining = 20 - creditCount

            setTotalCredits(creditCount);
            if (totalRemaining < 0) {
                toast.error('Credit Limit Exceeded')
            } else {
                setRemainingCredits(totalRemaining);
                setSelectedCourse([...selectedCourse, course])
            }



        }
    }
    // console.log(selectedCourse);

    return (

        <div className="container mx-auto">
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className="col-span-9">
                        <div className="grid grid-cols-3 gap-3 card-container">
                            {
                                cards.map((card) => (
                                    <div key={card.id} className="shadow-xl card bg-base-100">
                                        <div className="flex items-center justify-center m-3 bg-neutral-100 rounded-xl">
                                            <img src={card.image_url} alt="Course" className="w-full" />
                                        </div>
                                        <div className="items-center px-1 py-1 m-3 card-body">

                                            <h2 className="text-xl font-bold">{card.course_name}</h2>
                                            <p className="font-light text-justify">{card.short_details}</p>
                                            <div className='flex justify-between w-full text-xl font-medium'>
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
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 2500,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    );
};

export default Home;