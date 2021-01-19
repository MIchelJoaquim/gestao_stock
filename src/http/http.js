import axios from "axios";

export const API = "http://localhost:3002"

export class Http {
    url
    constructor(endpoint) {
        this.url = API+"/"+endpoint
    }

    get() {
        return axios.get(this.url+"/")
    }
    
    post(payload) {
        return axios.post(this.url, payload)
    }
    
    put(id, payload) {
        return axios.put(this.url+"/"+id, payload)
    }
    
    remove(id) {
        return axios.delete(this.url+"/"+id)
    }
}

