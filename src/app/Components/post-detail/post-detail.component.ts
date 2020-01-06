import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post;
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    //this.gelenID=;
    let id=this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get("https://jsonplaceholder.typicode.com/posts/"+id).subscribe(data=>this.post=data);
  }


}
