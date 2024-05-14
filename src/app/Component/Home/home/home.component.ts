import { Component } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selected!: Date | null;

  // Function to define CSS classes for specific dates
  dateClassPredicate = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6 ? 'disabled-date' : '';
  };

  public users: any = [];
  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  logout() {
    this.auth.signOut();
  }
  signgout() {
    this.auth.signOut();
  }
}
