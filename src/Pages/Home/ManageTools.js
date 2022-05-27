import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageTools = () => {

    const [allTools, setAllTools] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const url = 'https://dry-retreat-90563.herokuapp.com/tools';
            const { data } = await axios.get(url);
            setAllTools(data);

        }
        getItems();
    }, [])

    const handleToolDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `https://dry-retreat-90563.herokuapp.com/tools/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = allTools.filter(tool => tool._id !== id)
                    setAllTools(remaining);

                })
        }
    }

    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-5'>Tools</h1>
            <div className='lg:grid lg:grid-cols-3 gap-4 lg:place-content-evenly'>
                {
                    allTools?.map(tool => <div key={tool._id} className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={tool.img} alt={tool.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><span className='text-red-500'>{tool.name}</span></h2>
                            <p>{tool.shortDescription}</p>
                            <p><span className='font-bold'>Price:$ </span>{tool.price}</p>
                            <p><span className='font-bold'>MinimumOrderQuantity: </span>{tool.minimumOrderQuantity}</p>
                            <p><span className='font-bold'>AvailableQuantity: </span>{tool.availableQuantity}</p>
                            <div className="card-actions">
                                <button onClick={() => handleToolDelete(tool?._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageTools;