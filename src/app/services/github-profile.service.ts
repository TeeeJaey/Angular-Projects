
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class GithubProfileService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users', http);
  }
}
