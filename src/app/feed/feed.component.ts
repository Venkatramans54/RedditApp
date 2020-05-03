import { Component, OnInit,inject,Output,EventEmitter, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  author:any;
  thumbnail:any;

  constructor(
    public dialogRef: MatDialogRef<FeedComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.author=this.data.author;
    this.thumbnail=this.data.img
    console.log(this.thumbnail)

  }

}
