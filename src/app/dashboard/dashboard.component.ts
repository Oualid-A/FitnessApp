import { Component, HostListener, ViewChild, inject } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {  Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'mg-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule, MatIconModule,
    MatToolbarModule ,MatListModule,CommonModule,  RouterModule],
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private readonly minWidth = 900;
  reason = '';
  isSidebarOpen = false;
  isClicked = true;

  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustSidebar();
  }

  ngAfterViewInit() {
    this.adjustSidebar();
  }

  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  adjustSidebar() {
    if (window.innerWidth < this.minWidth) {
      this.sidenav.mode = 'over'; 
      this.isSidebarOpen = false; 
    } else {
      this.sidenav.mode = 'side'; 
      this.isSidebarOpen = true; 
    }
  }
  
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  logout(){  
      this.authService.signOut().then(() => {});
    
  }
}
