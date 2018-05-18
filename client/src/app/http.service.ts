import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    collectPets(){
        console.log('Service Collect Pets');
        return this._http.get('/pet');
    }

    createPet(newPet){
        console.log('Service Create Pet');
        return this._http.post('/pet', newPet);
    }

    getSinglePet(id: string){
        return this._http.get('/pet/detail/' + id);
    }

    editSinglePet(editPet){
        console.log('HttpService Edit Single');
        let url = `/pet/${editPet._id}`;
        console.log(url);
        return this._http.put(url, editPet);
    }

    deletePet(id: string){
        console.log("Delete Pet Service");
        const url = `/pet/${id}`;
        console.log(url);
        return this._http.delete(url);
    }
}
