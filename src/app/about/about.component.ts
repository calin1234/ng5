import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  routId: number;
  goals = [];

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routId = params['id']; // (+) converts string 'id' to a number
    });
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
