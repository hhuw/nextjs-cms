import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  isCardOpen = false;
  avatarText?: string;

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  toggleCard() {
    this.isCardOpen = !this.isCardOpen;
  }


  onInfo() {
    this.isCardOpen = !this.isCardOpen;
    this.router.navigate(['staff/info']);
  }

}
