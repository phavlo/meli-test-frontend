import dotenv from 'dotenv'
import axios from "axios";

dotenv.config();

class MeliHelper {
	constructor({ baseURL, site = "MLA" }) {
		this.http = axios.create({
			baseURL,
			timeout: 1000
		});
		
		this.site = site;
	}
  
	// https://api.mercadolibre.com/sites/MLA/search?q=​:query
	async search({q, limit = 4}) {
		try {
			const url = `/sites/${this.site}/search`;

			const response = await this.http.get(url, {
				params: {q,	limit}
			});

			return response.data;
		} catch (error) {
			console.error(error);
			return error;
		}
	}
  
	// https://api.mercadolibre.com/items/​:id
	async getItem({id}) {
		try {
			const response = await this.http.get(`/items/${id}`);

			return response.data;
		} catch (error) {
			console.error(error);
			return error;
		}
	}
	
	// https://api.mercadolibre.com/items/​:id​/description
	async getItemDescription({id}) {
		try {
			const response = await this.http.get(`/items/${id}/description`);

			return response.data;
		} catch (error) {
			console.error(error);
			return error;
		}
	}

	// https://api.mercadolibre.com/currencies
	async getCurrencies() {
		try {
			const response = await this.http.get(`/currencies`);

			return response.data;
		} catch (error) {
			console.error(error);
			return error;
		}
	}
	
	// https://api.mercadolibre.com/categories/:category_id
	async getCategoryById({category_id}) {
		try {
			const response = await this.http.get(`/categories/${category_id}`);

			return response.data;
		} catch (error) {
			console.error(error);
			return error;
		}
	}
}

const baseURL = process.env.API_MELI_URL || "https://api.mercadolibre.com";

export default new MeliHelper({ baseURL });