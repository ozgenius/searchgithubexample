import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class GithubService {
  private username:string;
  private client_id="d3e91f9870d90950e57c";
  private client_secret="e99ca530acbc058efbdb903af74a0a45762fb48a";

  constructor(private _http:Http) {
    console.log("Servis hazır");
    this.username="ozgenius";
  }
  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res=>res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res=>res.json());
  }
  updateUsername(username:string){
    this.username=username;
  }

}
