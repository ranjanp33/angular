import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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
	studentData: any = [];
	
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
		this.uphone = useredit['userphone']
		this.currentRate = useredit['urate']
		this.udate = useredit['udate']
		this.usalary = useredit['usalary']
	}

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



	// pipe 
	a: number = 0.259;
  	b: number = 1.3495;

  	today = '2018/07/23';

  	abc: string = 'ram';

  	// Custom pipe
  	gipipe = 100;

  	studentUsers:any;


   constructor(private serviceone : UserService) { }

	  ngOnInit() {
	  	this.serviceone.getuser()
	  		.then(users=>{
	  			this.studentUsers = users;
	  		})
	  		.catch(userErr=>{
	  			console.log(userErr)
	  		})
	  	// this.formbinding();

	  	this.fetchStudents()
	  }

	  fetchStudents() {
	  	this.serviceone.listStudents()
	  	.subscribe(studentList =>{

	  		this.studentData = studentList['data'];
	  	})
	  }

	  createstd() {
	  	let stdArr = {
	  		firstName: "Anil",
	  		lastName: "Maharjan",
	  		address: "Patan",
	  		email: "anil.maharjon@yahoo.com"
	  	}
	  	this.serviceone.createStudent(stdArr)
	  	.subscribe(createList =>{
	  		this.studentData.push(createList['data'])
	  	}, error=>{
	  		debugger;
	  	})
	  }




}
