import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/model/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-land-details',
  templateUrl: './view-land-details.component.html',
  styleUrls: ['./view-land-details.component.css']
})
export class ViewLandDetailsComponent {

  constructor(private userService: UserService) { }

  public dataSource = new MatTableDataSource<User>();
 
 
  ngOnInit(): void {
this.getAllRegisteredLandDetails();
  }

  getAllRegisteredLandDetails(){
   
   this.userService.getLandDetails()
   .subscribe((res :any) =>{
    this.dataSource = res;
     

   });
  }

  displayedColumns: string[] = ['ReqId', 'ownersName','village','mandal','district','state',
  'pincode','surveyNumber','extentofLand','services','status','actions'];

  updateRequestStatus(data : any){
  this.userService.updateLandDetails(data).
  subscribe(response => {
    console.log('data updated successfully');
  });
  this.getAllRegisteredLandDetails();
  }

  // upload(input : any,data : any){
  //   this.userService.upload(input,data).
  //   subscribe(response => {
  //     console.log('data updated successfully');
  //   });
  //   this.getAllRegisteredLandDetails();
  // }

}
