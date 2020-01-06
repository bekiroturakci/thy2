import { Component, OnInit, Input } from '@angular/core';
import { ProductCommentService } from 'src/app/Services/product-comment.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
comments;
@Input() productID
  constructor(private cServices:ProductCommentService) { }

  ngOnInit() {
    this.comments=this.cServices.getAll(this.productID);
  }

}
