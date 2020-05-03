import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import {MatDialog} from '@angular/material/dialog'
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dataList: any
  filterData=""
  data:any
  tempList=[]
  completeList=[]
  constructor(private service: RedditService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getData()
      .subscribe((res)=>{
        this.dataList=res.data.children
        this.completeList=this.dataList
      })
  }

  filterFeed(){
    this.dataList=this.completeList
    this.dataList.forEach(list => {
      if(list.data.title.includes(this.filterData)){
        console.log(list.data.title)
        this.tempList.push(list)
      }    
    });
    console.log(this.tempList)
    this.dataList=this.tempList
    this.tempList=[]    
  }

  getPostData(data){
    console.log(data.thumbnail)
    let dialogRef=this.dialog.open(FeedComponent,{
      data:{
        'author': data.author,
        'img': data.thumbnail
      }
    });

    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
    })
  }

}
