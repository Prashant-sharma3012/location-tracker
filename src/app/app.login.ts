import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css']
})
export class AppLogin {
    
  constructor(private _route: ActivatedRoute,
                private _router: Router) {}

    showMap(){
    this._router.navigate(['/chat/a1']);
    }
  
}
