import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;
  nnews = {} as any;
  url: string;
  constructor(public active: ActivatedRoute, public news: NewsService) {
    this.id = this.active.snapshot.paramMap.get('id');
    this.news.getNewsEgypt().subscribe((data) => {
      this.nnews = data.articles[this.id];
      this.url = data.articles.url;
      console.log(this.url);
    });
   }

  ngOnInit(): void {
  }

}
