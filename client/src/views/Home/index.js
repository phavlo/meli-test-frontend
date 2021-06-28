import React from "react";

import Helmet from "react-helmet";

import { SearchNavBar } from "../../components";

import logo from "../../assets/images/mercado-libre.png";

const HomeView = () => {

    return (
        <main className="meli-page-home">
            <SearchNavBar />

            <Helmet>
                <title>Home | Mercado libre</title>
                <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
                <meta property="og:title" content="Home | Mercado libre" />
                <meta property="og:image" content={logo} />
                <meta property="og:description" content="La comunidad de compra y venta online más grande de América Latina." />
            </Helmet>
        </main>
    )
}

export default HomeView;
