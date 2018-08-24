import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { }


  ngOnInit() {  
     //this is if you navigate away from the component follower and then re load the component 
     let id2 = this.route.snapshot.paramMap.get('id');
      console.log(id2);

      //this is when we stay on the same follower component but we switch only de id parameter
       this.route.paramMap
      .subscribe(params =>{
         let id= +params.get('id');
         console.log(id);
      });
  }

}
