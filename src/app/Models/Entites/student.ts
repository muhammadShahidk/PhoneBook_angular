import { IStudent } from "../InterFaces/istudent";
import { Course } from "./course";

export class Student implements IStudent{
    // properties
    private _name: string;
    private _id: number;
    private _phone: string;
    private _address: string;
    private _dateOfBirth: Date;
    private _Courses: Course[];

    public get Courses(): Course[] {
        return this._Courses;
    }
    public set Courses(value: Course[]) {
        this._Courses = value;
    }
    
    // getters and setters
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        // debugger
        if(value.length > 10 ){
            
            alert("Please enter a valid name: \n 10 charactors are allowd");
        }
        else {

            this._name = value;
        }
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {

        this._id = value;
    }
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: Date) {
        this._dateOfBirth = value;
    }

    // constructor
    constructor(){
        this._name = "";
        this._id = 0;
        this._phone = "";
        this._address = "";
        this._dateOfBirth = new Date();
        this._Courses = [];
    }
}
