import React, { useState } from 'react'
import data from "./data"
import './faq.css'

const Faq = () => {

    const [show, setShow] = useState(null)

    const handleClick = (idx) => {
        setShow((prevIdx) => (prevIdx === idx ? null : idx))
    }

    return (
        <div>
            {data.map((faq, idx) => (
                <div key={idx}>
                    <button className={` ${show === idx ? 'arrow' : ''}`} onClick={() => handleClick(idx)}>&gt;</button>
                    <div>{faq.question}</div>
                    <div>
                        {show === idx && <div>{faq.answer}</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faq;




// multiple open

// import { useState } from 'react';
// import './App.css';
// import data from './assets/data';

// function App() {
//   const [show, setShow] = useState([]);

//   const handleShowAns = (i) => {
//     setShow((prev) => {
//       // Check if the index is already in the array
//       if (prev.includes(i)) {
//         // If it is, remove it
//         return prev.filter(index => index !== i);
//       } else {
//         // If not, add it to the array
//         return [...prev, i];
//       }
//     });
//   };

//   return (
//     <div>
//       {data.map((item, i) => (
//         <div key={i}>
//           <button
//             className={show.includes(i) ? 'arrow' : ''}
//             onClick={() => handleShowAns(i)}
//           >
//             &gt;
//           </button>
//           <p>{item.question}</p>
//           <div>
//             {show.includes(i) && <p>{item.answer}</p>}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



//multiple open with botton

// import { useState } from 'react';
// import './App.css';
// import data from './assets/data';

// function App() {
//   const [show, setShow] = useState([]);
//   const [multiOpen, setMultiOpen] = useState(false);

//   const handleShowAns = (i) => {
//     setShow((prev) => {
//       if (multiOpen) {
//         // Multi-open mode
//         if (prev.includes(i)) {
//           return prev.filter(index => index !== i);
//         } else {
//           return [...prev, i];
//         }
//       } else {
//         // Single open mode
//         return prev.includes(i) ? [] : [i];
//       }
//     });
//   };

//   const toggleMultiOpen = () => {
//     setMultiOpen(prev => !prev);
//     // If switching to single mode, close all open answers
//     if (!multiOpen) {
//       setShow([]);
//     }
//   };

//   return (
//     <div>
//       <h4>
//         <label htmlFor="max-open">Is multiple open accordion allowed?</label>
//         <input
//           type="checkbox"
//           id="max-open"
//           checked={multiOpen}
//           onChange={toggleMultiOpen}
//         />
//       </h4>
//       {data.map((item, i) => (
//         <div key={i}>
//           <button className={show.includes(i) ? 'arrow' : ''} onClick={() => handleShowAns(i)}>
//             &gt;
//           </button>
//           <p>{item.question}</p>
//           <div>
//             {show.includes(i) && <p>{item.answer}</p>}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

