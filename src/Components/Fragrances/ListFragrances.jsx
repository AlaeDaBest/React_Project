import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fragrance from "./Fragrance";
import * as ActionCreator from '../../Redux/Creators/ActionsCreators';
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const ListFragrances = () => {
    const fragrances = useSelector((state) => state.fragrances);
    const dispatch = useDispatch();
    const [searchedTerm, setSearchedTerm] = useState('');
    const [selectedSex, setSelectedSex] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [sortedType, setSortedType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    let filteredFragrances = fragrances.filter((item) => (
        (selectedSex ? item.sex === selectedSex : true) &&
        (selectedBrand ? item.brand === selectedBrand : true) &&
        (searchedTerm ? item.name.toLowerCase().includes(searchedTerm.toLowerCase()) : true)
    ));

    var getSortedFragrances = () => {
        let sortedResult = filteredFragrances;
        if (sortedType === 'Asc') {
            sortedResult = sortedResult.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        } else {
            sortedResult = sortedResult.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        }
        return sortedResult;
    }

    const sortedFragrances = getSortedFragrances();

    // Calculer les indices des éléments à afficher en fonction de la page
    const indexOfLastFragrance = currentPage * itemsPerPage;
    const indexOfFirstFragrance = indexOfLastFragrance - itemsPerPage;
    const currentFragrances = sortedFragrances.slice(indexOfFirstFragrance, indexOfLastFragrance);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(sortedFragrances.length / itemsPerPage);

    // Fonction pour changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="body">
            <Header />
            <section className="SelectBar">
                <div>
                    <label htmlFor="">Select Sex : </label>
                    <select onChange={(e) => setSelectedSex(e.target.value)}>
                        <option value="">All</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Select Brand : </label>
                    <select onChange={(e) => setSelectedBrand(e.target.value)}>
                        <option value="">All Brands</option>
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
                    <label htmlFor="">Sort :</label>
                    <select name="" id="" onChange={(e) => setSortedType(e.target.value)}>
                        <option value="Desc">Newest to Oldest</option>
                        <option value="Asc">Oldest to Newest</option>
                    </select>
                </div>
            </section>

            <section id="CardGlobal">
                {currentFragrances.map((fragrance, i) => (
                    <Fragrance key={i} fragrance={fragrance} />
                ))}
            </section>

            <div className="pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                >
                    Prev
                </button>
                <span className="pagination-info">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                >
                    Next
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default ListFragrances;
