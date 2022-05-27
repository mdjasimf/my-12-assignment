import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name: Md Jasim Faqir</h2>
                        <h2 class="card-title">Email: mdjasimf@gmail.com</h2>
                        <h2 class="card-title">educational background: I completed BBS in 2016.</h2>
                        <h2 class="card-title">list of technologies or skills: 1.html</h2>
                        <ol>
                            <li>html</li>
                            <li>html-5</li>
                            <li>css</li>
                            <li>css framework
                                <ul>
                                    <li>bootstrape</li>
                                    <li>tailwind</li>
                                    <li>daisyui</li>
                                </ul>
                            </li>
                        </ol>
                        <h1>project link 1 :https://my-11th-assignment.firebaseapp.com/?fbclid=IwAR19Ulf9vZTBZbEjYdbuhc2dTwuunBf4q-KT-RgmIEkNXnRA_-_whV1UDn0</h1>
                        <h1>project link 2 :https://my-10th-assignment.web.app/?fbclid=IwAR2xPpxiyZvoXF4uXJQwpsrlpK-46uDl-oMJla4gwGmlOsWsj8AbgFhIQ80</h1>
                        <h1>project link 3 :https://my-9th-assignment.netlify.app/?fbclid=IwAR0Ff0TXLZ25S4Zb94BBjh0x8TBX8AD4C509PTDbHXIRcq-G5X4svCm8Fog</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;