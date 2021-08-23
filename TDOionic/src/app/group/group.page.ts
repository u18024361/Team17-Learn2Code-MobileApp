import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/Shared/student-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
myGroup:any[] =[];
studentId:any;

  constructor( private service: StudentServiceService) { }

  ngOnInit() {
    this.studentId = localStorage.getItem('user');
    console.log(this.studentId)
    this.getgroup();
  }

  getgroup(){
    this.service.getGroup(this.studentId).subscribe((result) => {
      console.log(result);
      this.myGroup = result;
      

      console.log( this.myGroup)
    });
  }

}
