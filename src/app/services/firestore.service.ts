import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private db: AngularFirestore
  ) { }

  async getAppDoc(metadata: 'Images') {
    return await this.db.doc(`App/${metadata}`).get();
  }
}
