import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth, User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    public afs: AngularFirestore,   //Injecter le service Firestore
    public afAuth: AngularFireAuth, // Injecter le service d'authentification Firebase
    public router: Router,
    public ngZone: NgZone //
  ) {


  }

  // Connectez-vous avec e-mail / mot de passe
  SignIn_S(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/stagiaire']);
        });

      }).catch((error) => {
        window.alert(error.message)
      })
  }



  SignIn_F(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/formateur']);
        });

      }).catch((error) => {
        window.alert(error.message)
      })
  }



  SignIn_G(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['gestionnaire/dashboard']);
        });

      }).catch((error) => {
        window.alert(error.message)
      })
  }





  // Renvoie true lorsque l'utilisateur est connecté et que l'e-mail est vérifié
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }


  //Connectez-vous avec Google
  GoogleAuth_F() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/formateur']);
        })

      }).catch((error) => {
        window.alert(error)
      })

  }


  GoogleAuth_G() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/gestionnaire']);
        })

      }).catch((error) => {
        window.alert(error)
      })

  }




  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/stagiaire']);
        })
      }).catch((error) => {
        window.alert(error)
      })
  }



  // Déconnexion
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/index']);
    })
  }
}
