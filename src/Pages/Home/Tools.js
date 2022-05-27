import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Tools = () => {
    const navigate = useNavigate();
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://dry-retreat-90563.herokuapp.com/tools').then(res =>
        res.json()
    )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const handlePurchase = (id) => {
        navigate(`/purchase${id}`);
    }
    return (
        <div>
            <h1 className='text-center text-success text-3xl font-bold my-5'>Tools</h1>
            <div className='lg:grid lg:grid-cols-3 gap-4 lg:place-content-evenly'>
                {
                    tools?.slice(-6).map(tool => <div key={tool._id} class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={tool.img} alt={tool.name} class="rounded-xl hover:rotate-90 hover:ease-in duration-300" />
                        </figure>
                        <div class="card-body hover:scale-110 hover:ease-in duration-300 items-center text-center">
                            <h2 class="card-title"><span className='text-red-500'>{tool.name}</span></h2>
                            <p>{tool.shortDescription}</p>
                            <p><span className='font-bold'>Price:$ </span>{tool.price}</p>
                            <p><span className='font-bold'>MinimumOrderQuantity: </span>{tool.minimumOrderQuantity}</p>
                            <p><span className='font-bold'>AvailableQuantity: </span>{tool.availableQuantity}</p>
                            <div class="card-actions">
                                <button onClick={() => handlePurchase(tool?._id)} class="btn btn-primary hover:rounded-full">Purchase Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;