import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList = [];
  taskName: string = "";

  constructor(public navCtrl: NavController, public alertController: AlertController) { }


  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
  }

  async updateTask(index) {
    let alert = await this.alertController.create({
      header: 'Are you sure ? ',
      // subHeader: 'Subtitle',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'edit data' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: data => {
          this.taskList[index] = data.editTask;
        }
      }
      ]
    });
    alert.present();
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }
}