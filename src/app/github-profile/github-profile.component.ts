import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  follower;
  ngOnInit() {

    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        console.log(params.get('id'));
        this.follower = { 
          id : params.get('id'),
          username : params.get('username')
        }
      });


  }

}
