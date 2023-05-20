import { ICourse } from '../InterFaces/icourse';

export class Course implements ICourse {
  private _Title: string;
  private _Description: string;
  private _Duration: number;
  private _Instructor: string;
  private _Rating: number;

  public get Title(): string {
    return this._Title;
  }
  public set Title(value: string) {
    this._Title = value;
  }
  public get Description(): string {
    return this._Description;
  }
  public set Description(value: string) {
    this._Description = value;
  }
  public get Duration(): number {
    return this._Duration;
  }
  public set Duration(value: number) {
    this._Duration = value;
  }
  public get Instructor(): string {
    return this._Instructor;
  }
  public set Instructor(value: string) {
    if(this.Rating > 5){
        console.log('rating is greater than 5 ---' + value);
        alert("rating is too high");
    }
    else {  
        this._Instructor = value;
    }
  }
  public get Rating(): number {
    return this._Rating;
  }
  public set Rating(value: number) {
    this._Rating = value;
  }

  constructor() {
    this._Title = '';
    this._Description = '';
    this._Duration = 0;
    this._Instructor = '';
    this._Rating = 0;
  }
}
