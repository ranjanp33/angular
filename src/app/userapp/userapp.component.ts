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
	formArray = [];
	formbinding() {
		let formobj = {
			username : this.uname,
			userage : this.uage,
			userphone : this.uphone,
			urate : this.currentRate
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
		this.uphone = useredit['userphone']
		this.currentRate = useredit['urate']
	}

  constructor() { }

  ngOnInit() {
  	// this.formbinding();
  }

}
