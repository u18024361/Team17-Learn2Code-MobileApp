import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Messaging } from 'src/Shared/messaging.model';
import { StudentServiceService } from 'src/Shared/student-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent implements OnInit {
  tutors: any = [];
  message: Messaging = <Messaging>{};
  nameArr: any = [];
  tut:any;
  l:any;
  constructor(
    private service: StudentServiceService,
    public alertController: AlertController,
    private modalCtrl: ModalController
  ) {
    modalCtrl.dismiss();
  }

  close() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.GetTutor()
  }

  GetTutor() {
    this.service.gettutor().subscribe((result) => {
      this.tutors = result;

      console.log(this.tutors)
    });
  }

  selectTutor(event){
    this.nameArr = event.split(',');
    console.log(this.nameArr);
    console.log(event)
  }

  sendMessage(){
    this.message.ReceiverId = this.nameArr[0];
    this.message.TutorId = this.nameArr[1]
    this.message.SenderId = "8be87939-d377-4a1c-96a4-61f69ae8174b";
    this.message.StudentId =5;
    this.service.createmessage(this.message).subscribe((result) => {
      console.log(this.tutors);
      Swal.fire('Saved!', result.message, 'success');
    },(error) => {
      Swal.fire('Error!', error.error, 'error');
    });

  }
}
