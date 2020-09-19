import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { UserService } from '../services/user-service';
import { Profile } from '../domain/Profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Component({
	selector: 'app-template',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	isValidFormSubmitted = null;
	allProfiles: Profile[];
	allTechnologies: Technology[];
	userForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private userService: UserService) { }
	ngOnInit(): void {
		this.userForm = this.formBuilder.group({
			userName: ['', [Validators.required, Validators.maxLength(15)]],
			age: ['', [Validators.required, Validators.min(18)]],
			profile: [null, [Validators.required]],
			technologies: [null, [Validators.required]],
			teamMates: this.formBuilder.array([new FormControl()]),
			gender: ['', Validators.required],
			isMarried: false,
			tc: ['', Validators.requiredTrue]
		});
		this.allProfiles = this.userService.getPofiles();
    this.allTechnologies = this.userService.getTechnologies();

	}
	get userName() {
		return this.userForm.get('userName');
	}
	get age() {
		return this.userForm.get('age');
	}
	get profile() {
		return this.userForm.get('profile');
	}
	get technologies() {
		return this.userForm.get('technologies');
	}
	get teamMates(): FormArray {
		return this.userForm.get('teamMates') as FormArray;
	}
	get gender() {
		return this.userForm.get('gender');
	}
	get tc() {
		return this.userForm.get('tc');
	}
	onFormSubmit() {
		this.isValidFormSubmitted = false;
		if (this.userForm.invalid) {
		   return;
		}
		this.isValidFormSubmitted = true;
		let newUser: User = this.userForm.value;
		this.userService.createUser(newUser);
		this.resetForm(this.userForm);
	}
	resetForm(form: FormGroup) {
		form.reset();
	}
	setDefaultValues() {
		let user = new User();
		user.userName = "Narendra Modi";
		user.age = 20;
		user.gender = 'male';
		user.profile = this.allProfiles[2];
		user.technologies = [
			this.allTechnologies[1],
			this.allTechnologies[3]
		];
		this.userForm.patchValue(user);
	}
	onProfileChange() {
		let profile: Profile = this.profile.value;
		console.log('Profile Changed: ' + profile.prName);
	}
	compareTech(t1: Technology, t2: Technology): boolean {
		//console.log(t1.techId + '-' + t2.techId);
		return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
	}
	addUserField() {
		this.teamMates.push(new FormControl());
	}
	deleteUserField(index: number) {
		this.teamMates.removeAt(index);
	}
}
