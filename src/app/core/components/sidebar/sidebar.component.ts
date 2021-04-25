import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public sidebarnavItems: RouteInfo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sidebarnavItems = ROUTES;
  }
}
