import { Http } from '../../http/http.js';

const http = new Http("produto")

export function create(data) {
    return http.post(data)
}

export function readAll(){
    return http.get()
}

export function readById(id){
    console.log(id);
    
    throw new Error("Method not implemented.");
}
export function update(data){
    return http.put(data.id, data)
}
export function remove(id){
    return http.remove(id)
}
