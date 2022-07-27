import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleList:any[] = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe (
      result=>{

      },
      error=>{
      
      console.log(error);
      
      
      });
      
    
    
  }
 
  delete(person:any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);
    this.userService.deleteUser(person._id).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }

    )
  }

}
