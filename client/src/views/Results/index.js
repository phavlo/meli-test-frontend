import React from "react";
import { useLocation } from "react-router-dom";

import Helmet from "react-helmet";

import './style.scss';

import { SearchNavBar, Breadcrumbs, ResultsList } from "../../components";
import { useFetchResults } from '../../hooks/useFetchApi';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
  
const ResultsView = () => {
    let query = useQuery();

    const searchQuery = query.get('search');
    const { data, loading } = useFetchResults( searchQuery );
    const loading_class = loading ? 'meli-content-loading meli-container' : 'meli-container';

    const meta_description = `Encontrá ${searchQuery} en MercadoLibre.com.uy! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`;

    return (
        <main className="meli-page-results">
            <SearchNavBar />
            <div class={loading_class}>
                <Breadcrumbs items={data.categories} />
                <ResultsList search={searchQuery} items={data.items} />
            </div>

            <Helmet>
                <title>{searchQuery} | Mercado libre</title>
                <meta name="description" content={meta_description} />
            </Helmet>
        </main>
    );
}

export default ResultsView;