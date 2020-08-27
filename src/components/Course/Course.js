import React, { useState } from 'react';
import './Course.css';
import fakeData from '../../fakeData/courses';
import Show from '../Show/Show';
import Cart from '../Cart/Cart';


const Course = () => {
    const courses15 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(courses15);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div>
            <Cart cart={cart}></Cart>
            {
                courses.map(course =>
                    <Show course={course} handleAddCourse={handleAddCourse}></Show>)
            }

        </div>
    );
};

export default Course;
