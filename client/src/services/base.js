import axios from "axios";
import { HOST } from "../config";

// Abstract Class
export default class BaseService {
  /**
   *
   * @param {Object} config
   * @param {string} config.url - Request URL
   * @param {string} config.method - Request Method
   * @param {Object} config.headers - Request Headers
   * @param {Object} config.payload - Request Payload (Body)
   * @param {Object} config.params - Request Query Params
   * @param {Object} options - Additional Options
   * @returns
   */
  async __request(config, options = {}) {
    const { url, method, payload, params } = config;
    let headers = config.headers;
    if (!headers) {
      headers = {};
    }
   
    try {
      const response = await axios({
        url,
        method,
        headers,
        params,
        data: payload,
      });
      return response;
    } catch (err) {
        console.log(err);
      if (err?.response?.status > 399) {
        const message = err?.response?.data?.error?.message;
        console.log(message);
      }
      throw err;
    }
  }
}
