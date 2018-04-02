import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource = new UserDataSource (this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends MatTableDataSource<any>{
  constructor(private userService: UserService){
    super();
  }

  connect(): Observable<User[]>{
    console.log(this.userService.getUser());
    return this.userService.getUser();
  }

  disconnect(){

  }
}
