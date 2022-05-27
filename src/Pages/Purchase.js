import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import OrderModal from './OrderModal';

const Purchase = () => {

    const [user, loading, error] = useAuthState(auth);




    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [order, setOrder] = useState(null)
    useEffect(() => {
        const url = `https://dry-retreat-90563.herokuapp.com/tools/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setTool(data));
    }, [id])


    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-center text-red-500'>Hi! {user.displayName} here is your details</h1>
            <div className='flex justify-center'>
                <div class=" card w-100 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={tool.img} alt={tool.name} class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title"><span className='text-red-500'>{tool.name}</span></h2>
                        <p><span className='font-bold'>Price:$ </span>{tool.price}</p>
                        <p><span className='font-bold'>Your Order: </span>{tool.minimumOrderQuantity}</p>
                        <p><span className='font-bold'>AvailableQuantity: </span>{tool.availableQuantity}</p>
                        <p>{tool.shortDescription}</p>
                        <div class="card-actions">
                            <label
                                onClick={() => setOrder(tool)}
                                for="order-modal" class="btn btn-outline btn-primary hover:rounded-full">Purchase now
                            </label>

                        </div>
                        {
                            order && <OrderModal
                                order={order}
                                setOrder={setOrder}
                            ></OrderModal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;