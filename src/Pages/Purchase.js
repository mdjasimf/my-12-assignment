import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setTool(data));
    }, [id])


    const { minimumOrderQuantity } = tool;
    const handleInclrease = (event) => {
        event.preventDefault();
        const newAddMinimumOrderQuantity = event.target.name.value;
        console.log(newAddMinimumOrderQuantity)
        const AddMinimumOrderQuantityy = parseInt(minimumOrderQuantity) + parseInt(newAddMinimumOrderQuantity);
        const updateMinimumOrderQuantity = { ...tool, minimumOrderQuantity: AddMinimumOrderQuantityy };
        setTool(updateMinimumOrderQuantity);
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMinimumOrderQuantity)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Restock successfully');
                event.target.reset();
            });
    }

    const handleDecrease = () => {

    }







    return (
        <div>
            <div className='flex justify-center'>
                <div class=" card w-100 bg-base-100 shadow-xl">
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
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handleInclrease}>
                    <input type="text" placeholder="Type here" name="name" class="input input-bordered input-success w-full max-w-xs" />
                    <button class="btn btn-outline btn-primary m-2">Button</button>
                </form>



            </div>
        </div>
    );
};

export default Purchase;