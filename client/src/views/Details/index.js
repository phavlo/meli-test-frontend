import React from "react";
import { useParams } from "react-router-dom";

import Helmet from "react-helmet";

import './style.scss';

import { SearchNavBar, Breadcrumbs, ItemDetails } from "../../components";
import { useFetchItemDetails } from "../../hooks/useFetchApi";

import { useLocation } from 'react-router-dom';

const DetailsView = () => {
    const location = useLocation();
    
    let { id } = useParams();

    const { data, loading } = useFetchItemDetails( id );
    const { item, category_path } = data;

    const items = category_path || [];
    
    const loading_class = loading ? 'meli-content-loading meli-container' : 'meli-container';

    return (
        <main className="meli-page-details">
            <SearchNavBar />
            <div class={loading_class}>
                <Breadcrumbs items={items} />
                <ItemDetails item={item} />
            </div>

            <Helmet>
                {item && <title>{item.title} | Mercado libre</title>}
                {item && item.description && (<meta name="description" content={item.description.substr(0, 200)} />)}

                <meta property="og:type" content="meli-uy:product" />
                {item && item.title && (<meta property="og:title" content={`${item.title} | Mercado libre`} />)}
                {item && item.description && (<meta property="og:description" content={item.description.substr(0, 200)} />)}
                {item && item.picture && (<meta property="og:image" content={item.picture} />)}
                {item && item.id && (<meta property="og:url" content={location.href} />)}
                
                {item && item.title && (<meta property="twitter:title" content={`${item.title} | Mercado libre`} />)}
                {item && item.description && (<meta property="twitter:description" content={item.description.substr(0, 200)} />)}
                {item && item.picture && (<meta property="twitter:image" content={item.picture} />)}
                <meta property="twitter:card" content="summary_large_image"/>
            </Helmet>
        </main>
    );
}

export default DetailsView;