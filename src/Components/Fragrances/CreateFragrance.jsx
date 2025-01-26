import React, { useRef, useState } from "react";
import Header from "../Home/Header";
import * as ActionCreator from '../../Redux/Creators/ActionsCreators';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Footer from "../Home/Footer";

const CreateFragrance = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [sex, setSex] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Utilisé pour rediriger

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImageUrl(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    function Add() {
        const newFragrance = {
            'name': name,
            'release_date': release_date,
            'brand': brand,
            'price': price,
            'picture': '/public/Fragrances/' + imageUrl,
            'genre': genre,
            'sex': sex
        };
        dispatch(ActionCreator.add_fragrance(newFragrance));
        navigate("/fragrances"); // Redirige vers la page fragrances après l'ajout
    }

    return (
        <div className="create-fragrance-container">
            <Header />
            <section className="form-section">
                <h1>Create New Fragrance</h1>
                <form className="fragrance-form">
                    <div className="input-group">
                        <label htmlFor="name">Fragrance Name:</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="image">Upload Image:</label>
                        <input type="file" ref={fileInputRef} onChange={handleImageChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="release_date">Release Date:</label>
                        <input type="date" id="release_date" onChange={(e) => setRelease_Date(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="brand">Brand:</label>
                        <select id="brand" onChange={(e) => setBrand(e.target.value)}>
                        <option value="Chanel">Chanel</option>
<option value="Dior">Dior</option>
<option value="Yves Saint Laurent">Yves Saint Laurent</option>
<option value="Giorgio Armani">Giorgio Armani</option>
<option value="Viktor & Rolf">Viktor & Rolf</option>
<option value="Thierry Mugler">Thierry Mugler</option>
<option value="Dolce & Gabbana">Dolce & Gabbana</option>
<option value="Lancome">Lancome</option>
<option value="Gucci">Gucci</option>
<option value="Paco Rabanne">Paco Rabanne</option>
<option value="Versace">Versace</option>
<option value="Tom Ford">Tom Ford</option>
<option value="Carolina Herrera">Carolina Herrera</option>
<option value="Jean Paul Gaultier">Jean Paul Gaultier</option>
<option value="Narciso Rodriguez">Narciso Rodriguez</option>
<option value="Jo Malone">Jo Malone</option>
<option value="Hermès">Hermès</option>
<option value="Creed">Creed</option>
<option value="Guerlain">Guerlain</option>
<option value="Maison Francis Kurkdjian">Maison Francis Kurkdjian</option>
<option value="Le Labo">Le Labo</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="genre">Genre:</label>
                        <select id="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option value="Floral">Floral</option>
<option value="Woody Aromatic">Woody Aromatic</option>
<option value="Oriental Vanilla">Oriental Vanilla</option>
<option value="Citrus Aromatic">Citrus Aromatic</option>
<option value="Floriental">Floriental</option>
<option value="Oriental">Oriental</option>
<option value="Citrus Floral">Citrus Floral</option>
<option value="Fruity Floral">Fruity Floral</option>
<option value="Oriental Spicy">Oriental Spicy</option>
<option value="Citrus Spicy">Citrus Spicy</option>
<option value="Woody Oriental">Woody Oriental</option>
<option value="Woody Spicy">Woody Spicy</option>
<option value="Oriental Fougere">Oriental Fougere</option>
<option value="Floral Woody Musk">Floral Woody Musk</option>
<option value="Spicy">Spicy</option>
<option value="Fruity">Fruity</option>
<option value="Amber Floral">Amber Floral</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label>Sex:</label>
                        <input type="radio" name="sex" value="Female" onClick={(e) => setSex(e.target.value)} /><label>Female</label>
                        <input type="radio" name="sex" value="Male" onClick={(e) => setSex(e.target.value)} /><label>Male</label>
                        <input type="radio" name="sex" value="Unisex" onClick={(e) => setSex(e.target.value)} /><label>Unisex</label>
                    </div>

                    <div className="form-actions">
                        <input type="button" value="Add Fragrance" className="submit-button" onClick={Add} />
                    </div>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default CreateFragrance;
