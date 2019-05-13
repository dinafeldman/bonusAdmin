import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }
  getClients(){
    return ["client1","client2","client3"];
  }
}
