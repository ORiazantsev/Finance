import BaseApi from "./base.api";

class UserApi extends BaseApi{
    public getUsers() {
        return this.axios.get(`${this.baseUrl}/users`).then(response => response.data);
    }

    public createUser() {
        return this.axios.post(`${this.baseUrl}/users`, {name: 'Agdar'});
    }
}

const userApi = new UserApi();

export default userApi;