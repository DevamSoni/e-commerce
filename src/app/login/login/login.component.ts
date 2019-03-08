import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  // email: any = "";
  // password: any = "";
  // submitted = false;
  // tryLogin() {
  //   if (this.email === "devam" && this.password === "devam") {
  //     this.submitted = true;
  //     this.router.navigate(["/home"]);
  //   } else {
  //     this.submitted = false;
  //   }
  //   this.authSer.login();
  // }

  // constructor(private authSer: AuthService, private router: Router) {}
  constructor(public  authService:  AuthService) { }

  ngOnInit() {}
}
