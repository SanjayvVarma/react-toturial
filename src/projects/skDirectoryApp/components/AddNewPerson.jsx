import React, { useState, useEffect, useRef } from 'react'

const AddNewPerson = () => {

    const [newRow, setNewRow] = useState([]);
    const [userData, setUserData] = useState(null);
    const nameRef = useRef();
    const birthRef = useRef();
    const aadharRef = useRef();
    const mobileRef = useRef();
    const ageRef = useRef();

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("user"))
        setUserData(localData);
    }, []);

    const AddRow = () => {
        const emptyRow = [
            { Name: "", DOB: "", AadharNum: "", MobileNum: "" }
        ];

        setNewRow(emptyRow);
    }

    const calculateAge = (e) => {
        const datearr = e.target.value.split("-");
        ageRef.current.value = new Date().getFullYear() - datearr[0];
    }

    const saveData = (e) => {
        e.preventDefault();
        let newData = {
            Name: nameRef.current.value,
            DOB: birthRef.current.value,
            AadharNum: aadharRef.current.value,
            MobileNum: mobileRef.current.value,
            Age: ageRef.current.value
        };

        const sessionData = JSON.parse(localStorage.getItem("user"));
        if (sessionData === null) {
            localStorage.setItem("user", JSON.stringify([newData]))
        }
        else {
            const updateSessionData = [...sessionData, newData];

            localStorage.setItem("user", JSON.stringify(updateSessionData));
            setUserData(updateSessionData);
            setNewRow([]);

        }

    }

    const handleDelete = (aadhar) => {

        const allData = JSON.parse(localStorage.getItem("user"));
        const searchedResult = allData.filter(
            (item) => item.AadharNum !== aadhar
        );

        localStorage.setItem("user", JSON.stringify(searchedResult));
        setUserData(searchedResult);
    }

    return (
        <div className="AddNewPerson">
            <div>
                <h4 className="page-title">Add New Person</h4>
            </div>

            <table frame="box" rules="all">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>Aadhar Number</th>
                        <th>Mobile Number</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData === null ? (
                        <tr>
                            <th colSpan="6">No data</th>
                        </tr>
                    ) : (
                        userData.map((item) => {
                            return (
                                <tr key={item.AadharNum}>
                                    <td>{item.Name}</td>
                                    <td>{item.DOB}</td>
                                    <td>{item.AadharNum}</td>
                                    <td>{item.MobileNum}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                        <button
                                            className="row-btns"
                                            onClick={() => handleDelete(item.AadharNum)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>

            {newRow.length === 0
                ? ""
                : newRow.map((item, index) => {
                    return (
                        <div key={index} className="form-container">
                            <h3 style={{ textAlign: "center" }}>
                                Fill below form for New Entry
                            </h3>
                            <form onSubmit={(e) => saveData(e)}>
                                <input
                                    ref={nameRef}
                                    type="text"
                                    placeholder="Name"
                                    defaultValue={item.Name}
                                    required
                                />
                                <input
                                    onChange={(e) => calculateAge(e)}
                                    defaultValue={item.DOB}
                                    type="date"
                                    ref={birthRef}
                                    required
                                />
                                <input
                                    defaultValue={item.AadharNum}
                                    type="number"
                                    placeholder="Aadhar number"
                                    min="100000000000"
                                    max="999999999999"
                                    ref={aadharRef}
                                    required
                                />
                                <input
                                    defaultValue={item.MobileNum}
                                    type="number"
                                    placeholder="Mobile number"
                                    min="1000000000"
                                    max="9999999999"
                                    required
                                    ref={mobileRef}
                                />
                                <input
                                    ref={ageRef}
                                    placeholder="Age"
                                    defaultValue={item.Age}
                                    disabled={true}
                                />
                                <input type="submit" className="row-btns" value="Save" />
                            </form>
                        </div>
                    );
                })}
            <button className="Add-btn" onClick={() => AddRow()}>
                Add
            </button>
        </div>
    )
}

export default AddNewPerson