
import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
//import { AlertModule } from '../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert';
// import { AlertModule} from 'ngx-bootstrap/alert'
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  public loggedIn = false;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public toastr:ToastrService,
    // public alert:AlertModule,
  ){    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.loggedIn = !!localStorage.getItem('token');
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
       // localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

    // Sign in with email/password
    SignIn(email, password) {
    
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          // console.log(result);
              this.ngZone.run(() => {});
          this.SetUserData(result.user);
          this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ true)
          .then((idToken)=> {
              localStorage.setItem('token', idToken);
              this.router.navigate(['dashboard']);
              // console.log(idToken);
          }).catch(function(error) {
            // Handle error
          });
        }).catch((error) => {
          //window.alert(error.message)
          //this.alert.showError(error.message) 
          this.toastr.success(error.message);
        
        })
    }

      // Sign out 
      
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
     // this.afAuth.auth.signOut();
      //this.authenticated = false;
  // alert("singin");
      window.localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.email !== '') ? true : false;
  }
      /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }
}
