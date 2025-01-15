import React, { useState, useRef } from 'react'

const Retrieve = () => {

    const [retrieveUserData, setRetrieveUserData] = useState([]);

    const findRef = useRef();

    const handleFind = (e) => {
        e.preventDefault();

        const findinput = findRef.current.value;
        const sessionData = JSON.parse(localStorage.getItem("user"));

        if (sessionData === null) {
            setRetrieveUserData([]);
        }
        else {

            const searchedResult = sessionData.filter(
                (item) => item.AadharNum === findinput
            );

            if (searchedResult.length > 0) {
                setRetrieveUserData(searchedResult);
            } else {
                setRetrieveUserData("");
            }
        }
    }
    return (
        <div className="Retrieve">
            <div>
                <h4 className="page-title">Retrieve Information</h4>
            </div>
            <div className="find">
                <form className="find-form" onSubmit={(e) => handleFind(e)}>
                    <input
                        className="search-aadhar"
                        type="number"
                        ref={findRef}
                        min="100000000000"
                        max="999999999999"
                        required
                    />
                    <input type="submit" className="find-btn" value="Find" />
                </form>
            </div>
            <div className="result">
                {retrieveUserData === "" ? (
                    <h1 style={{ textAlign: "center" }}>No Data Found</h1>
                ) : retrieveUserData.length === 0 ? (
                    <h1 style={{ textAlign: "center" }}>No Data</h1>
                ) : (
                    retrieveUserData.map((item) => {
                        return (
                            <div
                                style={{ border: "1px solid black" }}
                                key={item.AadharNum}
                            >
                                <p>Name :{item.Name}</p>
                                <p>DOB :{item.DOB}</p>
                                <p>Aadhar :{item.AadharNum} </p>
                                <p>Mobile no. :{item.MobileNum}</p>
                                <p>Age :{item.Age}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}

export default Retrieve