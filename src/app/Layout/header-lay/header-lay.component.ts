import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-lay',
  templateUrl: './header-lay.component.html',
  styleUrls: ['./header-lay.component.css']
})
export class HeaderLayComponent {
  @Output() sideBarControl = new EventEmitter();
  ShowHideSideBar(){
    this.sideBarControl.emit();
  }
}
