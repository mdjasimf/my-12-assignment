import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className="card w-96 bg-primary text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: Md Jasim Faqir</h2>
                        <h2 className="card-title">Email: mdjasimf@gmail.com</h2>
                        <h2 className="card-title">educational background: I completed BBS in 2016.</h2>
                        <h2 className="card-title"> </h2>
                        <h1 className='text-2xl'><u>list of technologies or skills:</u></h1>
                        <ol>
                            <li>1.html</li>
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
                        <h1 className='text-2xl'><u>Project link</u></h1>
                        <a href="https://my-11th-assignment.firebaseapp.com/?fbclid=IwAR19Ulf9vZTBZbEjYdbuhc2dTwuunBf4q-KT-RgmIEkNXnRA_-_whV1UDn0">project link 1</a>
                        <a href="https://my-10th-assignment.web.app/?fbclid=IwAR2xPpxiyZvoXF4uXJQwpsrlpK-46uDl-oMJla4gwGmlOsWsj8AbgFhIQ80">project link 2</a>
                        <a href="https://my-9th-assignment.netlify.app/?fbclid=IwAR0Ff0TXLZ25S4Zb94BBjh0x8TBX8AD4C509PTDbHXIRcq-G5X4svCm8Fog">project link 3</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;