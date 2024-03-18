import { NgIf, CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getmgaddar';
  @ViewChild('sidenav') sidenav: MatSidenav;
  private readonly minWidth = 900;
  reason = '';
  isSidebarOpen = false;
  isClicked = true;

  readonly #_authService: AuthService = inject(AuthService);
  
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
      this.#_authService.signOut().then(() => {
        window.alert('Logged out!');
      });;
  } 
}
