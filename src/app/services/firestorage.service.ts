import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(
    private storage: AngularFireStorage,
    private firestore: FirestoreService
  ) { }

  getAppImage(imageName) {
    const image = this.firestore.getAppDoc('Images');
  }
}
