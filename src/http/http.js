import axios from "axios";

export const API = "http://localhost:3002"

export class Http {
    url
    constructor(endpoint) {
        this.url = API+"/"+endpoint
    }

    get(params = "") {
        return axios.get(this.url+"/"+params)
    }
    
    post(payload) {
        return axios.post(this.url+"/create", payload)
    }
    
    put(id, payload) {
        return axios.put(this.url+"/update/"+id, payload)
    }
    
    remove(id) {
        return axios.delete(this.url+"/delete/"+id)
    }
}

