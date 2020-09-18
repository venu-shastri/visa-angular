import { Profile } from './profile';
import { Technology } from './technology';

export class User { 
	userName: string;
	age: number;
	teamMates: string[];
    gender: string;
    isMarried: boolean;
    tc: boolean;	
	profile: Profile = null;
	technologies: Technology[];
} 