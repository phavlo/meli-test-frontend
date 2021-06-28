import { useState, useEffect } from 'react'
import { getItemDetails, getResults } from '../helpers/api';

export const useFetchResults = ( search ) => {
    
    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        (async () => {
            const data = await getResults( search );

            setState({
                data: data,
                loading: false
            });
        })();
    }, [search])

    return state;
}

export const useFetchItemDetails = ( id ) => {
    
    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {

        (async () => {
            const data = await getItemDetails( id );

            setState({
                data: data,
                loading: false
            });
        })();

    }, [id])

    return state;
}
