import { Router } from '@angular/router'
import { AngularFireAuth} from '@angular/fire/auth' 

import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {

  private user;
  public userDetails: firebase.User = null;
  public displayName = "";

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user = afAuth.authState;
    this.user.subscribe(
      // subscribing a function to check if a user is logged in
      // updating local data if they are logged in
      (user) => {
        if (user){
          this.userDetails = user;
          this.displayName = (this.userDetails.displayName)?
          this.userDetails.displayName: this.userDetails.email; 
          console.log(this.userDetails);
          this.router.navigate(['/']);
        } else{
          this.userDetails = null;
        }
      }
    );
  }
  signInRegular(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  loginRegular(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  get isLoggedIn(){
    if(this.userDetails == null){
      return false;
    } else{
      return true;
    }
  }
  logout(){
    console.log("Logout");
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/']))
  }
}