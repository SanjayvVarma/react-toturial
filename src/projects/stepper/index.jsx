import React, { useState } from 'react';

const Stepper = () => {
    const stepConfig = [
        {
            name: 'Contact Details',
            Component: () => <div>Add contact details for further communications.</div>,
        },
        {
            name: 'Shipping Address',
            Component: () => <div>Add shipping address for successful delivery.</div>,
        },
        {
            name: 'office Address',
            Component: () => <div>Add office address for successful delivery.</div>,
        },
        {
            name: 'Payment',
            Component: () => <div>Complete Payment to complete the order.</div>,
        },
        {
            name: 'Delivered',
            Component: () => <div>Ready to get delivered!</div>,
        },
    ];

    const [currentStep, setCurrentStep] = useState(0)
    const [complete, setComplete] = useState(false)


    const handleNext = () => {
        if (currentStep < stepConfig.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            setComplete(true)
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
            setComplete(false)
        }
    }


    return (
        <div className='m-12 flex justify-between items-center'>
            <div >
                {
                    stepConfig.map(({ name }, idx) => (
                        <div className='flex gap-2 mb-10 items-center' key={name}>
                            <div className={`w-10 h-10 rounded-full flex justify-center items-center text-white relative ${idx <= currentStep ? 'bg-green-700' : 'bg-blue-900'}`}>

                                {
                                    currentStep > idx || complete ? <span>&#10003;</span> : idx + 1
                                }

                                {
                                    idx < stepConfig.length - 1 &&
                                    <div className={`h-10 w-1 bg-gray-700 absolute bottom-0 top-10 ${idx >= currentStep ? 'bg-blue-900' : 'bg-green-700'}`}></div>
                                }

                            </div>
                            <div>{name}</div>
                        </div>
                    ))
                }
            </div>
            <div>{!complete ? stepConfig[currentStep].Component() : 'Order Delivered successfully!🎉'}</div>
            <div className='flex flex-col'>
                <button
                    className="text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    disabled={currentStep === 0}
                    onClick={handlePrev}
                >PREV</button>
                <button
                    className="text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    disabled={complete}
                    onClick={handleNext}
                >
                    {currentStep === stepConfig.length - 1 ? 'FINISH' : 'NEXT'}
                </button>
            </div>
        </div>
    )
};

export default Stepper;



// harizontaly

// import React, { useState } from 'react';

// const Stepper = () => {
//     const stepConfig = [
//         {
//             name: 'Contact Details',
//             Component: () => <div>Add contact details for further communications.</div>,
//         },
//         {
//             name: 'Shipping Address',
//             Component: () => <div>Add shipping address for successful delivery.</div>,
//         },
//         {
//             name: 'Office Address',
//             Component: () => <div>Add office address for successful delivery.</div>,
//         },
//         {
//             name: 'Payment',
//             Component: () => <div>Complete Payment to complete the order.</div>,
//         },
//         {
//             name: 'Delivered',
//             Component: () => <div>Ready to get delivered!</div>,
//         },
//     ];

//     const [currentStep, setCurrentStep] = useState(0);
//     const [complete, setComplete] = useState(false);

//     const handleNext = () => {
//         if (currentStep < stepConfig.length - 1) {
//             setCurrentStep(currentStep + 1);
//         } else {
//             setComplete(true);
//         }
//     };

//     const handlePrev = () => {
//         if (currentStep > 0) {
//             setCurrentStep(currentStep - 1);
//             setComplete(false);
//         }
//     };

//     return (
//         <div className='flex items-center flex-col justify-between m-12'>
//             <div className='flex'>
//                 {
//                     stepConfig.map(({ name }, idx) => (
//                         <div key={name}>
//                             <div className='flex items-center'>
//                                 <div className={`w-10 h-10 rounded-full flex justify-center items-center text-white ${idx <= currentStep ? 'bg-green-700' : 'bg-blue-900'}`}>
//                                     {
//                                         currentStep > idx || complete ? <span>&#10003;</span> : idx + 1
//                                     }
//                                 </div>
//                                 {idx < stepConfig.length - 1 && (
//                                     <div className={`h-1 w-32 bg-gray-700 ${idx >= currentStep ? 'bg-blue-900' : 'bg-green-700'}`}></div>
//                                 )}
//                             </div>
//                             <div>{name}</div>
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className='mt-8'>
//                 {!complete ? stepConfig[currentStep].Component() : 'Order Delivered successfully!🎉'}
//             </div>
//             <div className='flex mt-4'>
//                 <button
//                     className="text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
//                     disabled={currentStep === 0}
//                     onClick={handlePrev}
//                 >
//                     PREV
//                 </button>
//                 <button
//                     className="text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
//                     disabled={complete}
//                     onClick={handleNext}
//                 >
//                     {currentStep === stepConfig.length - 1 ? 'FINISH' : 'NEXT'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Stepper;