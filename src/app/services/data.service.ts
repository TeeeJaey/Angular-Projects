import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found.error';
import { BadInputError } from '../bad-input';

@Injectable()
export class DataService {

  constructor(private url : string, private http: HttpClient) {}

  getAll()
  {
    return this.http.get(this.url)
        .map(response => response)
        .catch(this.handleError);
  }

  create(resource)
  {
    return this.http.post(this.url,JSON.stringify(resource))
        .map(response => response)
        .catch(this.handleError);
  }

  update(id)
  {
    return this.http.patch(this.url + '/' + id, JSON.stringify({isRead:true}))
        .map(response => response)
        .catch(this.handleError);
  }

  delete(id)
  {
    return this.http.delete(this.url+'/'+id)
        .map(response => response)
        .catch(this.handleError);
  }

  private handleError (error: Response)
  {
    if (error.status === 400)
    {
      return Observable.throw(
        new BadInputError()
      );
    }
    else if(error.status === 404)
    {
      return Observable.throw(
        new NotFoundError() 
      );   
    }
    else
    {
      return Observable.throw(
        new AppError(error)
      );
    }
  }
}
