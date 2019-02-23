import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElishCustomMaterialModule } from './shared/custom.material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './product/attendance.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { AboutusComponent } from './shared/aboutus.component';
import { LoginComponent } from './shared/login.component';
import { SignupComponent } from './shared/signup.component';
// Angular Firebase settings
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { FileUploadComponent } from './shared/dropzone/fileupload.component';
import { DropZoneDirective } from './shared/dropzone/dropzone.directive';
import { FileSizePipe } from './shared/dropzone/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElishCustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireModule.initializeApp(environment.firebase, 'Attendance-APP'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
