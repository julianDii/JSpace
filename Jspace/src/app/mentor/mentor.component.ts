import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mentor-component',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  mentorText: string = 'Here I am going to help you to repair your spaceship.';
  imgPath: string = "./assets/img/mentor.png";

  constructor() { }

  ngOnInit() {
  }

  // TODO: devide text into paragraphs

  setMentorText(text: string) {
    this.mentorText = text;
  }

  setImgMentor() {
    this.imgPath = "./assets/img/mentor.png";
  }

  setImgSuccess() {
    this.imgPath = "./assets/img/mentor_success.png";
  }

  setImgFailure() {
    this.imgPath = "./assets/img/mentor_failure.png";
  }

}
