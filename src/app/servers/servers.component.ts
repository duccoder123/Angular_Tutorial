import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: ` <app-server></app-server> `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!!';
  serverName = 'Test value';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
