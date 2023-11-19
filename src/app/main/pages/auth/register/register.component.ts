import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMessage?: string;
  idnp: string = '123456771231';
  username: string = 'Olaru Valentin';
  email: string = 'vallentindaniel0@gmail.com';
  password: string = 'vallentindaniel0';

  constructor(private authService: AuthService, private router: Router) { }

  private validateData(): any {
    if (this.idnp!= '' && this.username != '' && this.email != '' && this.password != '') {
      return true;
    }
    return false;
  }

  register(): void {
    
    if (this.validateData()) {
      console.log("register in progrress");
      this.authService.register(this.idnp, this.username, this.email, this.password).subscribe(
        {
          next: (data) => {
            //this.authService.saveToken(data.token);
            console.log(data);
            this.router.navigate(['/login']);
          },
          complete: () => {
            console.log("complete");
           },
          error: (error) => {
            console.log(JSON.stringify(error));
            this.errorMessage = 'Invalid credentials. Please try again.';
          }
        }
      );
    }

  }

}
