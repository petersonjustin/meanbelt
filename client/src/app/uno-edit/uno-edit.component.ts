import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-uno-edit',
  templateUrl: './uno-edit.component.html',
  styleUrls: ['./uno-edit.component.css']
})
export class UnoEditComponent implements OnInit {

    editPet;
    id;
    bEError;
    constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router ) {
    }

    ngOnInit(){
        if (!this.id) {
            this.retrieveID();
            console.log('Init after Params');
            this.acquirePet();
            console.log(this.editPet);
        }

    }
    retrieveID(){
        this._route.params.subscribe((params: Params)  => {
            console.log('Init on Edit Component');
            console.log(params.id);
            this.id = params.id;
        });
    }
    acquirePet(){
        let secondObs = this._http.getSinglePet(this.id);
        secondObs.subscribe(data => {
            console.log('observer Acquire Pet');
            console.log(data);

            this.editPet = data;
            console.log(this.editPet);
        });
    }
    updatePet(){
        let obs = this._http.editSinglePet(this.editPet);
        console.log('Update Pet Compontent');
        console.log(this.editPet);

        obs.subscribe(data => {
            console.log("Update sub response");

            console.log(data);

            if (data['errors']) {
                this.bEError = [''];
                if (data['errors']['name']) {
                    this.bEError.push(data['errors']['name'])
                }
                if (data['errors']['petType']) {
                    this.bEError.push(data['errors']['petType'])
                }
                if (data['errors']['desc']) {
                    this.bEError.push(data['errors']['desc'])
                }
            }else{
                console.log(`edited a Pet`);
                console.log(this.id);
                let tID = this.editPet._id;
                console.log(this.id);
                this._router.navigate(['pet/', tID ]);
            }
        });
    }

}
