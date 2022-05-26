import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl'>How will you improve the performance of a React Application?</h1>
                <p>I keep component state  local where necessary.I use memo and pure-components.
                    I avoid object literal and  anonymous functions. I use react.lazy </p>
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p>data state,control state,session state ,
                    location state ets, are the different ways I manage a state in a react application</p>
                <h1 className='text-2xl'>How does prototypical inheritance work?</h1>
                <p>prototypical inheritance is a feature in js use to add method and properties in object.This  is a method by which
                    an object can inherit the properties and methods of another object</p>
                <h1 className='text-2xl'> Why you do not set the state directly in React</h1>
                <p>We do not set the state directly because if we set state directly,
                    it does not change and  calling the setState afterward may just replace the update we made.</p>
                <h1 className='text-2xl'> What is a unit test? Why should write unit tests?</h1>
                <p> unit test is a softer testing.we should write unit testing because it ensures that all code meeting quality standards before being deployed</p>
            </div>
        </div >
    );
};

export default Blogs;