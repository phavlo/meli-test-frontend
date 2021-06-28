import React from 'react';

import "./style.scss";

export const Breadcrumbs = ({ items = [] }) => {

    const list = items.map( (item, i, a) => {
        const active = i === a.length - 1;
        const classes = active ? 'meli-active' : '';

        return (
            <li className={classes} itemprop="itemListElement" itemtype="http://schema.org/ListItem" itemscope="">
                 <a href="/" onClick={e => e.preventDefault()}>
                    {item}
                </a>
            </li>
        );
    });

    return (
        <section class="meli-breadcrumbs">
            <ol className="meli-breadcrumbs-nav" itemtype="http://schema.org/BreadcrumbList" itemscope="">
                {list}
            </ol>
        </section>
    );
}

export default Breadcrumbs;