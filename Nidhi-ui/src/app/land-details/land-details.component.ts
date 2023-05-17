import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent {

  constructor(private _formBuilder: FormBuilder,private userService: UserService) {}
  firstFormGroup: FormGroup = this._formBuilder.group({ownersName: [''],village: [''],
  mandal: [''],district: [''],state: [''],pincode: [''],extentofLand: [''],surveyNumber: [''],services:['']
});
  // secondFormGroup: FormGroup = this._formBuilder.group({Certificate: [''],landphoto: [''],CCcamera: [''],});


  // onSecondSubmit(){
  //   const formData = this.secondFormGroup.value;
  //   console.log(formData)
  // }

  onFirstSubmit(){
    const formData = this.firstFormGroup.value;
    // this.userService.saveLandDetails(formData);
    // console.log(formData);
    this.userService.saveLandDetails(formData)
      .subscribe(response => {
        console.log('data inserted successfully');
      });
  }

}
