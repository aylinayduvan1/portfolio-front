import "@angular/compiler";


import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { AvatarModule } from 'primeng/avatar';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { AuthModule } from './modules/auth/auth.module';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {TagModule} from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService} from 'primeng/api';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ManagmentComponent } from './page/managment/managment.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelmenuComponent } from './page/managment/components/panelmenu/panelmenu.component';
import { HideMenuLabelsDirective } from './hide-menu-labels.directive';
import { DashboardContentComponent } from './page/managment/components/dashboard-content/dashboard-content.component';
import { SidebarModule } from 'primeng/sidebar';
import { MyProfileInfoComponent } from './page/managment/components/my-profile-info/my-profile-info.component';
import { NavbarComponent } from './page/managment/navbar/navbar.component';
import { FooterComponent } from './page/managment/footer/footer.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { ContentComponent } from './content/content.component';
import { ExpriencePageComponent } from './page/managment/components/exprience-page/exprience-page.component';
import { EducationPageComponent } from './page/managment/components/education-page/education-page.component';
import { SkillPageComponent } from './page/managment/components/skill-page/skill-page.component';
import { CommentPageComponent } from './page/managment/components/comment-page/comment-page.component';
import { AdvertPageComponent } from './page/managment/components/advert-page/advert-page.component';

import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';

@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ManagmentComponent,
    HomepageComponent,
    PanelmenuComponent,
    HideMenuLabelsDirective,
    DashboardContentComponent,
    MyProfileInfoComponent,
    NavbarComponent,
    FooterComponent,
    RegisterPageComponent,
    ContentComponent,
    ExpriencePageComponent,
    EducationPageComponent,
    SkillPageComponent,
    CommentPageComponent,
    AdvertPageComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AvatarModule,
    AppRoutingModule,
    RouterModule,
    ToastModule,
    CommonModule,
     DialogModule,
    RippleModule,
     TableModule,
     TagModule,
     ProgressBarModule,
     SliderModule,
     MultiSelectModule,
     DropdownModule,
     AccordionModule,
    ButtonModule,
     ToastModule,
     ToolbarModule,
     ConfirmDialogModule,
     FileUploadModule,
    RatingModule,
    TagModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    PasswordModule,
    CalendarModule,
    ReactiveFormsModule,
    PanelMenuModule,
    SidebarModule,
    PaginatorModule,
    CarouselModule
  ],
  providers: [AuthService,
    MessageService,
{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
 
    AuthModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
