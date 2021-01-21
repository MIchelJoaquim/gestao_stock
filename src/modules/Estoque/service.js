import { Http } from '../../http/http.js';

const http = new Http("estoque")

export function create(data) {
    return http.post(data)
}

export function readAll(){
    return http.get()
}

export function readById(id){
    return http.get(id)
}
export function update(data){
    console.log(data);
    
    throw new Error("Method not implemented.");
}
export function remove(id){
    return http.remove(id)
}
