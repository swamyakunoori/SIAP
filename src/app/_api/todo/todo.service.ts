import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
  loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
  ref = firebase.firestore().collection('todo');

  constructor(private firestore: AngularFirestore) {
  }

  getTODOS(userId) {
    return this.firestore.collection('todo', ref => ref.orderBy('createdDate', 'desc')
      .where('uid', '==', userId)).snapshotChanges();
  }

  createTodo(todo): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(todo).then((doc) => {
        observer.next({
          data: doc
        });
      });
    });
  }

  updateTODO(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteTodo(id: string): Promise<void> {
      return this.ref.doc(id).delete();
  }
}
