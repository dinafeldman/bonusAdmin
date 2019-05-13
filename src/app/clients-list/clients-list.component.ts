import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clients: string[];
  
  constructor(service:ClientsService) { 
    //this.clients = ["client1","client2","client3"];
    this.clients = service.getClients();
  }

  ngOnInit() {
  }

}
