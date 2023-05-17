import { Component , OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table'; 
import { User } from 'src/model/user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-view-registered-users',
  templateUrl: './view-registered-users.component.html',
  styleUrls: ['./view-registered-users.component.css']
})
export class ViewRegisteredUsersComponent implements OnInit {


  username : any;

  constructor(private userService: UserService,private authservice:AuthService) { }

  public dataSource = new MatTableDataSource<User>();
 
 
  ngOnInit(): void {
this.getAllRegisteredUsers();

  }

  getAllRegisteredUsers(){
   
   this.userService.getAdminBoard()
   .subscribe((res :any) =>{
    this.dataSource = res;
     

   });
  }

  displayedColumns: string[] = ['id', 'username','email'];

}
