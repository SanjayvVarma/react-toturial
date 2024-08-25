import React from "react";

const DIE_FACES = [
    ['center'],
    ['top-right', 'bottom-left'],
    ['top-right', 'center', 'bottom-left'],
    ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
    ['top-left', 'top-right', 'center-left', 'center-right', 'bottom-left', 'bottom-right'],
];


const Die = ({ value }) => {

    const dots = DIE_FACES[value - 1];

    return (
        <div className={`die face-${value}`}>
            <div className="dot-container">
                {
                    dots.map((dot, index) => (
                        <div key={index} className={`dot ${dot}`} />
                    ))
                }
            </div>
        </div>
    );
};

export default Die;