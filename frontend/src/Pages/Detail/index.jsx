import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Detail() {
    let navigate = useNavigate()
    const location = useLocation()

    const handlePageHome = async () => {
        navigate('/infinity/email');
    }
    
    return(
        <main id="detail">
            <Header />
            <div className="detail-content">
                <section className="detail-panel">
                    <h2>Detalhamento</h2>
                    <button onClick={() => handlePageHome()}>Voltar</button>
                </section>
                <section className="detail-card">
                    <article className="detail-card-content">
                        <p className="detail-card-title">De:</p>
                        <p>{location.state.emailFrom}</p>
                    </article>
                    <article className="detail-card-content">
                        <p className="detail-card-title">Para:</p>
                        <p>{location.state.emailTo}</p>
                    </article>
                    <div className="detail-card-subject-text">
                        <div>
                            <p className="detail-card-title">Assunto do E-mail</p>
                            <p>{location.state.subject}</p>
                        </div>
                        <article>
                            <p className="detail-card-title">Conteúdo:</p>
                            <p>{location.state.text}</p>
                        </article>
                    </div>
                    <article className="detail-card-content">
                        <p className="detail-card-title">Data:</p>
                        <p>{location.state.sendDateEmail}</p>
                    </article>
                    <article className="detail-card-content">
                        <p className="detail-card-title">Status:</p>
                        <p>{location.state.statusEmail}</p>
                    </article>
                </section>
            </div>
            <Footer />
        </main>
    )
}
