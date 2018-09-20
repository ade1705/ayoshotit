import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pictures: any = [];
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures() {
    this.pictures = [];
    this.rest.getPictures().subscribe((data: any) => {
      this.pictures = data.data;
      console.log(this.pictures);
    });
  }

}
