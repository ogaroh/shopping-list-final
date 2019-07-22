import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';

const firebaseConfig = {
  apiKey: "AIzaSyDpk7L-EgRrHd8Ddv5OKRRC8w9wyuGBpT4",
  authDomain: "shopping-list-final.firebaseapp.com",
  databaseURL: "https://shopping-list-final.firebaseio.com",
  projectId: "shopping-list-final",
  storageBucket: "shopping-list-final.appspot.com",
  messagingSenderId: "487610459140",
  appId: "1:487610459140:web:0d829a445769f1de"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
