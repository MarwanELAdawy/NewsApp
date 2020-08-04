import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egypt',
  templateUrl: './egypt.component.html',
  styleUrls: ['./egypt.component.css']
})
export class EgyptComponent implements OnInit {

  egyptNews = [];

  constructor(news: NewsService) {
    news.getNewsEgypt().subscribe((data) => {
      this.egyptNews = data.articles;
    });
  }

  ngOnInit(): void {
  }

}
