import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';


@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  usaNews = [];

  constructor(usanews: NewsService) {
    usanews.getNewsUsa().subscribe((data) => {
      this.usaNews = data.articles;
    });
  }

  ngOnInit(): void {
  }

}
