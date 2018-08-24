import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute ) { }


  ngOnInit() {  
     //this is if you navigate away from the component follower and then re load the component 
     let parametrologin = this.route.snapshot.paramMap.get('segundoParametro');
     //este parametro viene segun el html component de followers 
     console.log(parametrologin);

      //this is when we stay on the same follower component but we switch only de id parameter
       this.route.paramMap
      .subscribe(params =>{
         let id= +params.get('primerParametro');
         console.log(id);
      });
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: { page:1, order: 'newest' }
    });
  }

}
