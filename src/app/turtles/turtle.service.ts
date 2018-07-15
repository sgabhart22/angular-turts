import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Turtle } from '../turtle';

@Injectable({
  providedIn: 'root'
})
export class TurtleService {

  readonly path = '/turtles';

  constructor(private db: AngularFireDatabase) { }
 
  getTurtles(): Observable<any[]> {
    return this.db.list(this.path).valueChanges();
  }

  addTurtle(turtle: Turtle) {
	const turtRef = this.db.object(this.path + '/' + turtle.name);
	console.log('Object binding created.');
	
	turtRef.set({
	  name: turtle.name,
	  class: turtle.subclass,
	  description: turtle.description,
	  url: turtle.url,
	  favorite: turtle.favorite
	});
  }
}
