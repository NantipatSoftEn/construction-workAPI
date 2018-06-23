var axios = require('axios');


exports.index = async (url) => {

    try {
        const res = await axios.get(url);
        return {
            data: res.data,
            error: false,
            status: res.status
        }
    } catch (error) {
        console.log(error);
        return {
            data: error.message,
            error: true,
            status: res.status
        }
    }

};

exports.show = async (url, id) => {
    try {
        const res = await axios.get(`${url}/${id}`);
        return {
            data: res.data,
            error: false,
            status: res.status
        }
    } catch (error) {
        console.log(error);
        return {
            data: error.message,
            error: true,
            status: res.status
        }
    }
};

exports.create = async (url, data) => {
    try {
        const res = await axios.post(url, data);
        return {
            data: res.data,
            error: false,
            status: res.status
        }
    } catch (error) {
        console.log(error);
        return {
            data: error.message,
            error: true,
            status: res.status
        }
    }
}


exports.update = async (url, id, data) => {
    try {
        const res = await axios.put(`${url}/${id}`, data);
        return {
            data: res.data,
            error: false,
            status: res.status
        }
    } catch (error) {
        console.log(error);
        return {
            data: error.message,
            error: true,
            status: res.status
        }
    }
}


exports.destroy = async (url, id) => {
    try {
        const res = await axios.delete(`${url}/${id}`);
        return {
            data: res.data,
            error: false,
            status: res.status
        }
    } catch (error) {
        console.log(error);
        return {
            data: error.message,
            error: true,
            status: res.status
        }
    }
}