import {Component, Output, EventEmitter} from '@angular/core';
import {User} from "../shared/model/user";

@Component({
	selector: 'user-form',
	templateUrl: './user-form.component.html'
})
export class UserFormComponent {
	@Output() userCreated = new EventEmitter;
	newUser: User = new User();
	active: boolean = true;
	
	// workaround for Angular to reset the form after submitting
	// (reset its invalid state when new User is void again)
	
	onSubmit() {
		// send event for user created
		this.userCreated.emit({user: this.newUser});
		
		this.newUser = new User();
		
		// workaround for Angular to reset the form after submitting
		// (reset its invalid state when new User is void again)
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}
}