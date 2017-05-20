import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mentor-component',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  mentorText: string = 'Here I am going to help you to repair your spaceship.';

  constructor() { }

  ngOnInit() {
  }

  setMentorText(text: string) {
    this.mentorText = text;
  }
}
