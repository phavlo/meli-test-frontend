import React from 'react';
import { Link } from 'react-router-dom';

import "./style.scss";

import { currencyFormat } from "../../helpers/number";

export const ResultsListItem = ({data}) => {

    const url = `/items/${data.id}`;

    const symbol = data.price.symbol || "$";
    const price = currencyFormat(data.price.amount, symbol);
    const free_shipping = data.free_shipping ? 'meli-item-free-shipping' : 'meli-item-no-free-shipping';
    const condition = data.condition === 'new' ? 'Nuevo' : 'Usado';

    return (
        <article className="meli-results-list-item">

            <div className="meli-grid">
                <div>
                    <div className="meli-item-picture">
                        <Link to={url}>
                            <img src={data.picture} alt={data.title} width="180" height="180" />
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="mali-item-price-wrapper">
                        <div className="meli-item-price">{price}<sup>00</sup><span className={free_shipping}></span></div>
                        <div className="meli-item-condition">{condition}</div>
                    </div>
                    <h2>
                        <Link to={url}>{data.title}</Link>
                    </h2>
                </div>
            </div>
            
        </article>
    )
}

export default ResultsListItem;