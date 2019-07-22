import { Component } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS WebSocket Example';
  message: string = 'Hello World';
  constructor(private webSocketService:WebSocketService) { }
  connect() {
    this.webSocketService.connect();
  }
  send() {this.webSocketService.send(this.message);} 



  
}
