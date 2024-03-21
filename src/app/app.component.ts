import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
