export const getResults = async ( search ) => {

    const url = `/api/items?q=${ encodeURI( search ) }`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data;
}

export const getItemDetails = async ( id ) => {

    const url = `/api/items/${id}`;
    const resp = await fetch( url );
    const data = await resp.json();

    return data;
}