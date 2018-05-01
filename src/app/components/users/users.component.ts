import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';
import { MatSort, MatTableDataSource, MatPaginator, MatInput } from '@angular/material';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  dataSource;
  displayedColumns = ['name', 'email', 'phone', 'company'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe( results => {
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }

    );
  }

}
