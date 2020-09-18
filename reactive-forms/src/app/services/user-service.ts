import { Injectable } from '@angular/core';

import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    getPofiles(): Profile[] {
        let profiles = [
            new Profile('dev', 'Developer'),
            new Profile('man', 'Manager'),
            new Profile('dir', 'Director')
        ]
        return profiles;
    }
    getTechnologies(): Technology[] {
        let technologies = [
            new Technology(100, 'Java'),
            new Technology(101, 'Angular'),
            new Technology(102, 'Hibernate'),
            new Technology(103, 'Spring')
        ]
        return technologies;
    }
    createUser(user: User) {
        //Log user data in console
        console.log("User Name: " + user.userName);
        console.log("User age: " + user.age);
        console.log("Profile Id: " + user.profile.prId);
        console.log("Profile Name: " + user.profile.prName);
        for (let i = 0; i < user.technologies.length; i++) {
            console.log("Technology Id: " + user.technologies[i].techId);
            console.log("Technology Name: " + user.technologies[i].techName);
        }
        user.teamMates.forEach(element => console.log("Teammate: "+ element));
        console.log("Gender: " + user.gender);
        console.log("Married: " + user.isMarried);        
        console.log("T & C Accepted: " + user.tc);  
    }
}