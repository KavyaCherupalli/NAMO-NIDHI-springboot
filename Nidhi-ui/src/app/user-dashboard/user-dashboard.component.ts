import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/model/user';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {


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

  displayedColumns: string[] = ['services','status']
}
