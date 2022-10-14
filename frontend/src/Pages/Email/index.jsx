import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Table from "../../Components/TableEmail";
import Footer from "../../Components/Footer";

import "./style.css";

import api from "../../Services/api-email";

export default function Email() {
    const [ list, setList ] = useState([]);
    let navigate = useNavigate();

    const handlePageHome = async () => {
        navigate('/infinity/home')
    }

    const handleFilterDate = async () => {
        let dateFilter = document.getElementById('date_filter').value
        console.log(dateFilter);
        api.get(`/listEmail/${dateFilter}`).then((res) => {
            setList(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        api.get(`/listEmail/`).then((res) => {
            setList(res.data)
        })
    }, [])
    return(
        <main id="email">
            <Header />
            <div className="email-content">
                <section className="email-panel">
                    <h2>Listagem de E-mail's</h2>
                    <div className="input-filter">
                        <input id="date_filter" type="date" placeholder="Filtrar por data"/>
                        <button onClick={() => handleFilterDate()}>Filtrar</button>
                    </div>
                    <button onClick={() => handlePageHome()}>Voltar</button>
                </section>
                <Table data={list} />
            </div>
            <Footer />
        </main>
    )
}
