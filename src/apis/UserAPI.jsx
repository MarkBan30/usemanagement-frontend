import axios from "axios";
import BaseAPI from "apis/BaseAPI";

export default class UserAPI extends BaseAPI {
    add_user = async (user) => {
        let axiosConfig = {
            url: `${process.env.REACT_APP_ZTGG_BACKEND_API_ENDPOINT}/user`,
            method: 'post',
            headers: { ...this.authHeaders, "Content-Type": "application/json" },
            data: user
        }
        try {
            let { status, data } = await axios(axiosConfig);
            if (status >= 200 && status < 300)
                return { status: 'success', msg: data.msg };
            else {
                return { status: 'fail', msg: data.msg };
            }
        }
        catch (error) {
            console.log(error);
            return { status: 'fail', msg: (error.response.data.msg ? error.response.data.msg : 'Fail to add user') };
        }
    }

    delete_user = async (uid) => {
        let axiosConfig = {
            url: `${process.env.REACT_APP_ZTGG_BACKEND_API_ENDPOINT}/user/${uid}`,
            method: 'delete',
            headers: { ...this.authHeaders }
        }
        try {
            let { status, data } = await axios(axiosConfig);
            if (status >= 200 && status < 300)
                return { status: 'success', msg: data.msg };
            else {
                return { status: 'fail', msg: data.msg };
            }
        }
        catch (error) {
            console.log(error);
            return { status: 'fail', msg: (error.response.data.msg ? error.response.data.msg : 'Fail to delete user') };
        }
    }

    load_users = async () => {
        let axiosConfig = {
            url: `${process.env.REACT_APP_ZTGG_BACKEND_API_ENDPOINT}/users`,
            method: 'get',
            headers: { ...this.authHeaders }
        }

        try {
            let { status, data } = await axios(axiosConfig);
            if (status >= 200 && status < 300) {
                return data
            } else {
                console.log("Fail to load users from server");
                return false;
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}