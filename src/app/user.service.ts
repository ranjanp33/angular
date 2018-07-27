import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getuser() {
		return new Promise((resolve, reject)=>{
		  	let userArr = [
		  		{
		  			name: "Bijay Prajapati",
		  			class: 8,
		  			rollno: 6,
		  			section: "A"
		  		},
		  		{
		  			name: "Ajay Prajapati",
		  			class: 10,
		  			rollno: 12,
		  			section: "B"
		  		},
		  		
		  		{
		  			name: "Sunil Prajapati",
		  			class: 9,
		  			rollno: 21,
		  			section: "B"
		  		},
		  		{
		  			name: "Rakesh",
		  			class: 6,
		  			rollno: 10,
		  			section: "A"
		  		}
		  	];
		  	resolve(userArr);
	  	})
  	}

  	listStudents() {
  		return this.http.get('http://192.168.1.244:4100/app/users/list');
  	}

  	createStudent(studentObj) {
  		return this.http.post('http://192.168.1.244:4100/app/users/create', studentObj);
  	}
}
