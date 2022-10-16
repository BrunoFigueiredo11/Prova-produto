import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Background from "../../Images/home-background.jpg";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Home() {
    let navigate = useNavigate()
    
    const handlePageProducts = async () => {
        navigate("/infinity/products")
    }

    const handlePageEmail = async () => {
        navigate("/infinity/email")
    }

    return(
        <main id="home">
            <Header />
            <div className="home-container">
                <section className="home-content">
                    <div className="home-content-text">
                        <h3>Consultar e Cadastrar Produtos</h3>
                        <p>Aqui você pode consultar todos os produtos cadastrados no sistema e cadastrar novos Produtos através de um formulário.</p>
                        <button onClick={() => handlePageProducts()}>Avançar</button>
                    </div>
                    <div className="home-content-text">
                        <h3>Consultar E-mail's</h3>
                        <p>Nessa sessão apresentamos os e-mails cadastrados e filtrados do seu jeito, com a inclusão de um microsserviço especial! Você também terá acesso a um dashboard com as informações específicas e detalhadas de cada e-mail enviado.
                        </p>
                        <button onClick={() => handlePageEmail()}>Avançar</button>
                    </div>
                </section>
                <img src={Background} alt="Background Home" />
            </div>
            <Footer />
        </main>
    )
}
