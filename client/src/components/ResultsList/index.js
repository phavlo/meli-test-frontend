import React from 'react';

import { ResultsListItem } from '../ResultsListItem';

import './style.scss';

export const ResultsList = ({ items = [] }) => {

    const list = items.map((i) => {
        return (
            <div>
                <ResultsListItem data={i} />
            </div>
        );
    });

    return (
        <section className="meli-results-list">
            <div className="meli-grid meli-child-width-1-1">
                {list}
            </div>
        </section>
    )
}

export default ResultsList;