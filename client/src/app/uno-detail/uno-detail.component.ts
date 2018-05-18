import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-uno-detail',
  templateUrl: './uno-detail.component.html',
  styleUrls: ['./uno-detail.component.css']
})
export class UnoDetailComponent implements OnInit {

    singlePet;
    id;
    pets;
    isDisabled = false;
    constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router ) {
    }

    ngOnInit(){
        this.retrieveID();
        console.log('Detail - Init after Params');
        this.acquirePet();
    }
    retrieveID(){
        this._route.params.subscribe((params: Params)  => {
            console.log('Init on Detail Component');
            console.log(params.id);
            this.id = params.id;
        });
    }
    acquirePet(){
        let secondObs = this._http.getSinglePet(this.id);
        secondObs.subscribe(data => {
            console.log('observer Acquire Pet');
            console.log(data);

            this.singlePet = data;
            console.log(this.singlePet);
        });
    }
    getAllPets(){
        let obs = this._http.collectPets();
        obs.subscribe(data =>{
            console.log(data);
            this.pets = data;
        });
    }
    deletePet(id: string){
        console.log('DeletePet Component');
        console.log(id);

        let obs = this._http.deletePet(id);
        obs.subscribe(data => {
            console.log('Subscribe delete Pet component');
            this.getAllPets();
            this._router.navigate(['pets']);
        })
    }
    disablebutton(){
    }
    likePet(id:string){
        console.log('Disable Button Clicked');
        console.log(this.isDisabled);
        this.isDisabled = true;
        console.log(this.isDisabled);

        this.singlePet.likes += 1;
        let obs = this._http.editSinglePet(this.singlePet);
        console.log('Update Pet Compontent');
        console.log(this.singlePet);
        obs.subscribe(data => {
            console.log(`edited a Pet`);
            this.id = this.singlePet._id;
            console.log(this.id);
            this.acquirePet()
        });
    }

}
