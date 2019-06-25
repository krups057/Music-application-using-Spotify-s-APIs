import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable()
export class LogoutService {

  constructor(public afAuth: AngularFireAuth) { }

  logout() {
    this.afAuth.auth.signOut();
  }

}
