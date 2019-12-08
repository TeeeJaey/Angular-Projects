import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found.error';
import { BadInputError } from '../common/validators/bad-input';

@Component({
  selector: 'http-posts',
  templateUrl: './http-posts.component.html',
  styleUrls: ['./http-posts.component.css']
})
export class HttpPostsComponent implements OnInit {

  posts:any;
  
  constructor(private service: HttpService) {}

  ngOnInit()
  {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(title: HTMLInputElement)
  {
    let post = { title: title.value };
    this.posts.splice(0, 0, post);

    title.value = '';
    
    this.service.create(post)
      .subscribe(
        myPost => {
          post['id'] = myPost['id'];
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if(error instanceof BadInputError)
          {
            //this.form.setErrors(error.originalError);
            alert('Bad input: ' + error);
          }
          else throw error;
          console.log(error);
        }
      );
  }

  updatePost(post, title: HTMLInputElement)
  {

    let index = this.posts.indexOf(post);
    let oldPost = this.posts[index].title;
    this.posts[index].title = title.value;

    this.service.update(post.id)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        },
        (error: AppError) => {
          this.posts[index].title = oldPost;

          if(error instanceof BadInputError)
          {
            //this.form.setErrors(error.originalError);
            alert('Bad input: ' + error);
          }
          else throw error;
          console.log(error);
        }
      );
      //this.http.put(this.url, JSON.stringify(post));
  }
  

  deletePost(post)
  {
    let index = this.posts.indexOf(post);
    let deletedPost = this.posts[index];
    this.posts.splice(index,1);

    this.service.delete(post.id)
      .subscribe(
        () => {
          console.log(deletedPost);
        },
        (error : AppError) => {
          this.posts.splice(index,0,deletedPost);

          if(error instanceof NotFoundError){
            alert('Post already deleted: ' + error);
          }
          else throw error;
          console.log(error);
        }
      );
  }
}