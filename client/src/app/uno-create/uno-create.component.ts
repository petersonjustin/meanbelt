import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-uno-create',
  templateUrl: './uno-create.component.html',
  styleUrls: ['./uno-create.component.css']
})
export class UnoCreateComponent implements OnInit {

  // make sure the Pet matches Uno and fields on the form
    newPet = {
        name: '',
        petType: '',
        desc: '',
        skill1: '',
        skill2: '',
        skill3: '',
    };

    bEError: any;

    constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router ) { }

    ngOnInit() {

    }

    createPet(){
        console.log('Create Pet Component Action');
        console.log(this.newPet);
        let obs = this._http.createPet(this.newPet);
        obs.subscribe(data => {
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
                console.log('Pew Pet created = component');
                this._router.navigate(['/pets']);
            }
        })

    }

}
