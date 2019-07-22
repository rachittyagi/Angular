import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';



@Injectable({  providedIn: 'root' })
export class WebSocketService {
  private URL:string  = "ws://127.0.0.1";
  private PORT:string= "5000";
  private subject : any;
  constructor() { }


  connect() {    
    console.log("connecting");
    this.subject = new WebSocketSubject(this.URL+ ":" + this.PORT);
    
    this.subject.subscribe(
      (msg) => console.log(msg),
      (err) => console.log(err),
      () => console.log("completed")
    );
    console.log(this.subject);
  }

  send(message : string) {
    console.log("sendng message");
    this.subject.next({FilePath: "abcws", Copies: 2});
  }
}
