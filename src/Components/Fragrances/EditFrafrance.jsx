import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { edit_fragrance } from "../../Redux/Creators/ActionsCreators";

const EditFragrance = ({ fragrance, onClose }) => {
    const [formData, setFormData] = useState({ ...fragrance });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFragrance = { ...formData };
        console.log("Form data being submitted:", updatedFragrance); // Débogage
    
        // Nous utilisons 'name' pour identifier la fragrance à modifier
        dispatch(edit_fragrance(fragrance.name, updatedFragrance));
        onClose();
    };
    
    

    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
            }}
        >
            <h2>Edit Fragrance</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Release Date:</label>
                    <input
                        type="date"
                        name="release_date"
                        value={formData.release_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Sex:</label>
                    <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unisex">Unisex</option>
                    </select>
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ marginTop: "15px" }}>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#dea74a",
                            color: "white",
                            padding: "10px 15px",
                            border: "none",
                            borderRadius: "5px",
                            marginRight: "10px",
                            cursor: "pointer",
                        }}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            backgroundColor: "#bf9345",
                            color: "white",
                            padding: "10px 15px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditFragrance;
