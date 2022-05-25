import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Tools = () => {
    const navigate = useNavigate();
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res =>
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
            <h1 className='text-center text-3xl font-bold my-5'>Tools</h1>
            <div className='lg:flex lg:justify-center'>
                {
                    tools?.slice(0, 3).map(tool => <div key={tool._id} class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={tool.img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{tool.name}</h2>
                            <p>{tool.shortDescription}</p>
                            <p><span className='font-bold'>Price:$ </span>{tool.price}</p>
                            <p><span className='font-bold'>MinimumOrderQuantity: </span>{tool.minimumOrderQuantity}</p>
                            <p><span className='font-bold'>AvailableQuantity: </span>{tool.availableQuantity}</p>
                            <div class="card-actions">
                                <button onClick={() => handlePurchase(tool?._id)} class="btn btn-primary">Purchase Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;