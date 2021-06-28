import ItemModel from "./item";

export const fromMeli = ({
    filters,
    results,
}) => {
    return {
        categories: filters[0].values[0].path_from_root.map(c => c.name),  
        items: results.map(item => searchItemMap(item)),
    }
}

const searchItemMap = (data) => {
    const itemResult = ItemModel.fromMeli(data);

    delete itemResult.item.sold_quantity;
    delete itemResult.item.description;

    return itemResult.item;
}

export default {
    fromMeli,
}
