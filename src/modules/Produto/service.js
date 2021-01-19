import { Http } from '../../http/http.js';

const http = new Http("produto")

export function create(data) {
    console.log(data);
    
    throw new Error("Method not implemented.");
}

export function readAll(){
    return http.get()
}

export function readById(id){
    console.log(id);
    
    throw new Error("Method not implemented.");
}
export function update(data){
    console.log(data);
    
    throw new Error("Method not implemented.");
}
export function remove(id){
    console.log(id);
    
    throw new Error("Method not implemented.");
}
