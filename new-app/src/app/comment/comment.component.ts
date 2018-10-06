import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  videos = [
    {title: 'video one', liked: true},
    {title: 'video two', liked: false}
  ]

  isShown: boolean = true

  showClick(){
    this.isShown = !this.isShown
  }

  constructor() { }

  ngOnInit() {
  }

}
