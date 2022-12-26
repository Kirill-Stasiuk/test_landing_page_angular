import { Component, OnInit } from '@angular/core';
import {ServiceList} from "../../models/service-list.model";
import {SERVICE_LIST} from "../../statics/service-list.static";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  serviceList: ServiceList[] = SERVICE_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
