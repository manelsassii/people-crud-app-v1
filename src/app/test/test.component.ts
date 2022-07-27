import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Manel";
  imageUrl = "./../../assets/images/logo.png";
  booksList = [];

  userList:any[] = [];

  myCondition = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.userList = result;

      },
      error => {
        console.log(error);

      }

    )
  }
  hello(myname: string) {
    alert('Hello' + myname)
  }



}
