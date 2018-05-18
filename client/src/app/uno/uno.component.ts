import { ActivatedRoute, Router, Params} from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {


    pets;
    id;

    constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }


    ngOnInit() {
        this.getAllPets();
    }

    getAllPets(){
        let obs = this._http.collectPets();
        obs.subscribe(data =>{
            console.log(data);
            this.pets = data;
        });
    }
    retrieveID(){
        this._route.params.subscribe((params: Params)  => {
            console.log('Init on Edit Component');
            this.id = params.id;
        });
    }

}
