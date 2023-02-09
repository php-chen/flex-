import axios from "axios"
export default class Http {

    // 默认地址
    static baseURL = 'https://cxfweb.xyz/clickNumber/sql/' || '175.27.234.94'

    /**
     * @description POST 请求
     * @param {Object} requestData  请求参数
     * @param {String} requestData.url 请求地址
     * @param {Object} requestData.params 请求参数
     * @returns apiMsg
     */
    static async requestPost(requestData) {
        const baseURL = this.baseURL
        //常用的基本配置
        return new axios.post(baseURL + requestData.url, requestData.params)
    }

    /**
     * @description GET请求
     * @param {Object} requestData  请求参数
     * @param {String} requestData.url 请求地址
     * @param {Object} requestData.params 请求参数
     * @returns apiMsg
     */
    static async requestGet(requestData) {
        const baseURL = this.baseURL
        //常用的基本配置
        return new axios.get(baseURL + requestData.url, requestData.params)
    }



}
