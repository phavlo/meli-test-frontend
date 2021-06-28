export const fromMeli = ({
        id,
        title,
        currency_id,
        price,
        decimal_places,
        currency_symbol,
        secure_thumbnail,
        thumbnail,
        pictures,
        condition,
        shipping,
        sold_quantity,
        description,
    }) => {
    return {
        item: {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: decimal_places || 2,
                symbol: currency_symbol || '$'
            },
            picture: pictures && pictures.length ? pictures[0].secure_url : secure_thumbnail || thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: description || ""
        }
    }
}

export default {
    fromMeli,
}
