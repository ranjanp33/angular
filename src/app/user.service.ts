import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor() { }

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
}
