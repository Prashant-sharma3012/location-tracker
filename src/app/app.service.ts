import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';


export class dataService {
  private url = 'http://localhost:8000';  
  private socket;
  
  sendMessage(message){
    this.socket.emit('loc', message);    
  }
  
  Connect(){
    this.socket = io.connect(this.url); 
    this.socket.emit('init', 'room1');
  }

  getMessages() {

    let observable = new Observable(observer => {
      this.socket.on('ploc', (data) => {
        console.log(data);
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}