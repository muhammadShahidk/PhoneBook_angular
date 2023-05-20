import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderLayComponent } from './Layout/header-lay/header-lay.component';

// material components definitions
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SidnaveLayComponent } from './Layout/sidnave-lay/sidnave-lay.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MainLayComponent } from './Layout/main-lay/main-lay.component';
import { StudentPageComponent, StudentTablePageComponent } from './Pages/student-page/student-page.component';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderLayComponent,
    SidnaveLayComponent,
    MainLayComponent,
    StudentPageComponent,
    StudentTablePageComponent,
    CoursesPageComponent,
  ],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatTreeModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
