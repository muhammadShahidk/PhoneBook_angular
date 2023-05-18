import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('toast') searchBar:ElementRef|null = null;

GetForm(arg0: any) {
  console.log(arg0);
}

showToast() {
  console.log(this.searchBar?.nativeElement)
}
  title = 'PhoneBook';
}
