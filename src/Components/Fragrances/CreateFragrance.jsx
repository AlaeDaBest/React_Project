import React, { useState } from "react";
import Header from "../Home/Header";
const CreateFragrance=()=>{
    const [name,setName]=useState('');
    const [brand,setBrand]=useState('');
    const [picture,setPicture]=useState('');
    const [release_date,setRelease_Date]=useState('');
    const [genre,setGenre]=useState('');
    const [price,setPrice]=useState('');
    const [sex,setSex]=useState('');
    function Add(){
        const newFragrance={
            'name':name,
            'release_date':release_date,
            'brand':brand,
            'price':price,
            'picture':picture,
            'genre':genre,
            'sex':sex
        }
    }
    return(
        <div>
            <Header/>
            <section>
                <h1></h1>
                <form action="">
                    <section>
                        <div>
                            <label htmlFor="">Fragrance Name :</label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div>
                            <input type="file" onChange={(e)=>setPicture(e.target.value)} />
                            <label htmlFor="">Add Photo</label>
                        </div>
                    </section>
                    <section>
                        <label htmlFor="">Release Date :</label>
                        <input type="date"onChange={(e)=>setRelease_Date(e.target.value)} />
                    </section>
                    <section>
                        <div>
                            <label htmlFor="">Brand :</label>
                            <select onChange={(e)=>setBrand(e.target.value)}>
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
                        <div>
                            <label htmlFor="">Genre :</label>
                            <select onChange={(e)=>setGenre(e.target.value)}>
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
                    </section>
                    <section>
                        <div>
                            <label htmlFor="">Price :</label>
                            <input type="text" onChange={(e)=>setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Genre :</label>
                            <input type="radio" name="sex" onClick={(e)=>setSex(e.target.value)} value="Female" /><label htmlFor="">Female </label>
                            <input type="radio" name="sex" onClick={(e)=>setSex(e.target.value)}  value="Male" /><label htmlFor="">Male </label>
                            <input type="radio" name="sex" onClick={(e)=>setSex(e.target.value)}  value="Unisex" /><label htmlFor="">Unisex </label>
                        </div>
                    </section>
                    <input type="button" value="Add Fragrance" onClick={Add} />
                </form>
            </section>
        </div>
    )
}
export default CreateFragrance;