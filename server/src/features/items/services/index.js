import { MeliHelper } from "../../../core/helpers";
import { ItemModel, SearchModel } from "../models";

// 
export const itemsByQuery = async ({q}) => {
    try {
        const searchData = await MeliHelper.search({q});

        const result = SearchModel.fromMeli(searchData);

        return result;
       
    } catch (error) {
        return {
            error: error.toString(),
        }
    }
}

//
export const itemById = async ({id}) => {
    try {
        const [itemData, descriptionData, currenciesData] = await Promise.all([
            MeliHelper.getItem({id}),
            MeliHelper.getItemDescription({id}),
            MeliHelper.getCurrencies(),
        ]);
    
        // Description
        const description = descriptionData.plain_text;

        // Currency data
        const itemCurrency = currenciesData.filter(c => c.id == itemData.currency_id)[0];
        const decimal_places = itemCurrency.decimal_places;
        const currency_symbol = itemCurrency.symbol;
        
        // Category data
        const category_id = itemData.category_id;
        const category = await MeliHelper.getCategoryById({category_id});
        const category_path = category.path_from_root.map(c => c.name);

        // Model item data
        const meliItemData = {
            ...itemData,
            decimal_places,
            currency_symbol,
            description,
        }

        const item = ItemModel.fromMeli(meliItemData);
        
        return {
            ...item,
            category_path
        };

    } catch (error) {
        return {
            error: error.toString(),
        }
    }
}

export default {
    itemsByQuery,
    itemById,
}