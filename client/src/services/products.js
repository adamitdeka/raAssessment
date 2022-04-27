import { HOST } from "../config"; 
import BaseService from "./base";

export default class ProductService extends BaseService {
    constructor() {
      super();
      this.apiPrefix = `${HOST}/api`;
    }
    async getProducts() {
      return this.__request({
        url: `${this.apiPrefix}/products`,
        method: "GET"
      });
    }
}
  