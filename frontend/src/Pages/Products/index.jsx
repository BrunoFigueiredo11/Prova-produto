import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Table from "../../Components/TableProduct";
import Footer from "../../Components/Footer";
import api from "../../Services/api-product";

import "./style.css";

export default function Products() {
    let navigate = useNavigate()
    const [ list, setList ] = useState([])

    const handlePageStudio = async () => {
        navigate('/infinity/studio')
    }

    useState(() => {
        api.get("/produto").then((response) => {
            setList(response.data)
        })
    }, [])
    return (
        <main id="products">
            <Header />
            <div className="products-content">
                <section className="products-panel">
                    <h2>Produtos Cadastrados</h2>
                    <button onClick={() => handlePageStudio()}>Cadastrar Produto</button>
                </section>
                <Table data={list} />
            </div>
            <Footer />
        </main>
    )
}
