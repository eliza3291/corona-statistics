import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoreComponent implements OnInit {
  constructor() {}

  public innerWidth = 0;
  public defaultSidebar = '';
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = 'full';

  options = {
    theme: 'light',
    dir: 'ltr',
    layout: 'vertical',
    sidebartype: 'full',
    sidebarpos: 'fixed',
    headerpos: 'fixed',
    boxed: 'full',
    navbarbg: 'skin5',
    sidebarbg: 'skin4',
    logobg: 'skin4'
  };

  Logo(): void {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit(): void {
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.handleSidebar();
  }

  handleSidebar(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = 'mini-sidebar';
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType(): void {
    switch (this.sidebartype) {
      case 'full':
        this.sidebartype = 'mini-sidebar';
        break;

      case 'mini-sidebar':
        this.sidebartype = 'full';
        break;

      default:
    }
  }
}
