export default class BaseAPI {
    authHeaders = {
        username: ""
    }

    constructor(user) {
        this.authHeaders.username = user;
    }

    setAuthHeaders(user) {
        this.authHeaders.username = user;
    }
}