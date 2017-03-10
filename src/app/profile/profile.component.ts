import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user:any;
  private repos:any;
  username:string;
  constructor(private _githubService:GithubService) {
  this.user=false;
  }
  searchUser(){
    this._githubService.updateUsername(this.username);
    this._githubService.getUser().subscribe(user=>{
      this.user=user;
      console.log(user);
    });
    this._githubService.getRepos().subscribe(repos=>{
      this.repos=repos;
      console.log(repos);
    });
  }

  ngOnInit() {
  }

}
