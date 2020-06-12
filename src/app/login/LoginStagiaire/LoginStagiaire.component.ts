import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/service/AuthenticationService.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-LoginStagiaire',
  templateUrl: './LoginStagiaire.component.html',
  styleUrls: ['./LoginStagiaire.component.css']
})
export class LoginStagiaireComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    public authService: AuthService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/add']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}
