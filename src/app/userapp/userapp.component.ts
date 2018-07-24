import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userapp',
  templateUrl: './userapp.component.html',
  styleUrls: ['./userapp.component.css']
})
export class UserappComponent implements OnInit {
	title = "My Custom App";
	currentRate = 8;

	uname: string;
	uage: number;
	uphone: number;
	udate: any;
	usalary: number;
	formArray = [];
	userArrs = [{
		name: "Bikash Shrestha",
		age: 28
	},{
		name: "Ranjan Prajapati",
		age: 15
	},{
		name: "Aakash Prajapati",
		age: 30
	}]
	formbinding() {
		let formobj = {
			username : this.uname,
			userage : this.uage,
			userphone : this.uphone,
			urate : this.currentRate,
			udate : this.udate,
			usalary : this.usalary
		}
		this.formArray.push(formobj)
	}

	delete(i) {
		this.formArray.splice(i,1)
	}

	edit(i) {
		let useredit = this.formArray[i]
		this.uname = useredit['username']
		this.uage = useredit['userage']
	}

	// pipe 
	a: number = 0.259;
  	b: number = 1.3495;

  	today = '2018/07/23';

  	abc: string = 'ram';

  	// Custom pipe
  	gipipe = 100;


   constructor() { }

  ngOnInit() {
  	// this.formbinding();
  }

}
