import {Component} from '@angular/core';
import {User} from "./shared/model/user";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works 2!';
	
	users: User[] = [
		{ id: 25, name: 'Chris', username: 'sevilayha' },
		{ id: 26, name: 'Nick', username: 'whatnicktweets' },
		{ id: 27, name: 'Holly', username: 'hollylawly' }
	];
	activeUser: User;
	
	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}
	
	onUserCreated(event) {
		this.users.push(event.user);
	}

}
 