import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {dataService} from './app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.map.html',
  styleUrls: ['./app.map.css']
})

export class mapComponent implements OnDestroy, OnInit {
  messages = [];
  connection;
  message;
  markers = [];

private sub: Subscription;
  
  constructor(private dataService:dataService,private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit() {
        var self = this;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
             var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              label: 'you',
              draggable: false
            }
            //self.markers.push(pos);
            self.dataService.Connect();
            self.dataService.sendMessage(pos);
            self.connection = self.dataService.getMessages().subscribe(message => {
            self.markers.push(message);
            console.log(self.markers)
            });
            })
        }
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 
}
