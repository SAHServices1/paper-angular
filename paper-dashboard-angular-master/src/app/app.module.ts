import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from 'app/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from "@angular/common/http";

import { MatSliderModule } from "@angular/material/slider";
import { ItemComponent } from './pages/item/item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MenuComponent } from './menu/menu.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { CompanyComponent } from './company/company.component';
import { PartsComponent } from './parts/parts.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ItemComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    CompanyComponent,
    PartsComponent,
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    CommonModule,
    BrowserModule,
    FixedPluginModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTreeModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    // DialogBoxComponent
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
