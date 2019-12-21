import { GithubFollowersService } from './github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import { slide } from '../common/animations';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
  animations: [slide]
})


export class GithubFollowersComponent implements OnInit {
  followers: Object;

  constructor(private route: ActivatedRoute,private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,      
      this.route.queryParamMap    
    ])
    .subscribe(combined => {
        console.log(combined[0].get('id'));    
        console.log(combined[1].get('page'));   
  
        this.service.getAll()
          .subscribe(followers => this.followers = followers)
      })
  }
}
