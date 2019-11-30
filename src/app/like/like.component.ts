import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {
  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  onClick()
  {
    if(this.isLiked == true)
    { 
      this.likesCount--;
      this.isLiked = false;
    }
    else
    { 
      this.likesCount++;
      this.isLiked = true;
    }
  }
}
