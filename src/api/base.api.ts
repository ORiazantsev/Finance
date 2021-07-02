import axios, { AxiosStatic } from "axios";

export default class BaseApi {
    protected baseUrl: string;
    protected axios: AxiosStatic;

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
        this.axios = axios;
    }
}