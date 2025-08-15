import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustompipePipe } from '../custompipe-pipe';

@Component({
  selector: 'app-pipeoperators',
  imports: [FormsModule, JsonPipe, CommonModule, CustompipePipe],
  standalone: true,
  templateUrl: './pipeoperators.html',
  styleUrl: './pipeoperators.css',
})
export class Pipeoperators {
  name = 'Abhijeet Mulik';
  MyFriendName = 'Sangram Jadhav';

  today = new Date();
  date = new Date();
  amount = 999.99;

  Customname = 'abhijeet MULIK';

  userdata = {
    name: 'sangram',
    age: 21,
    skills: ['Angular', 'Node', 'Mongodb'],
  };
}
