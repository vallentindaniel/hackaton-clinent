import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main/_services/auth.service';
import { LoggedService } from 'src/app/main/_services/logged.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  user: any;

  constructor(private logged: LoggedService,
    private router: Router, private auth: AuthService) {}

  ngOnInit(): void{
    this.auth.getUser().subscribe(data =>{ 
      this.user =data
      console.log(this.user.id)
    })
  }

  logout(): void {
    this.logged.isLogged.next(false);
    this.logged.user.next('');
    this.auth.removeUser();
    this.router.navigate(['/login']);
    // Add any additional cleanup or navigation logic here
  }


}
