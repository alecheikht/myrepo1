
import { BrowserModule }    from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


//Third Party Modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule    } from '@swimlane/ngx-charts';
import { ClarityModule      } from '@clr/angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material';
//Local App Modules
import { AppRoutingModule } from './app-routing.module';

// Directives
import { TrackScrollDirective } from './directives/track_scroll/track_scroll.directive';

// Components
import { BadgeComponent  } from './components/badge/badge.component';
import { LegendComponent } from './components/legend/legend.component';
import { LogoComponent   } from './components/logo/logo.component';

//Pages  -- Pages too are components, they contain other components
import { AppComponent }       from './app.component';
import { HomeComponent         } from './home.component';
import { LoginComponent        } from './pages/login/login.component';
import { LogoutComponent       } from './pages/logout/logout.component';
import { DashboardComponent    } from './pages/dashboard/dashboard.component';

// Services
import { AppConfig        } from './app-config';
import { UserInfoService  } from './services/user-info.service';
import { AuthGuard        } from './services/auth_guard.service';
import { ApiRequestService} from './services/api/api-request.service';
import { TranslateService } from './services/api/translate.service';
import { LoginService     } from './services/api/login.service';
import { ThemesComponent } from './components/themes/themes.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ThemeService } from './services/api/theme.service';
import { ComiteComponent } from './pages/comite/comite.component';
import { OrganisationService } from './services/api/organisation.service';
import { ListedomainesComponent } from './components/listedomaines/listedomaines.component';
import { ListesemainesComponent } from './components/listesemaines/listesemaines.component';
import { SemaineService } from './services/api/semaine.service';
import { ComiteService } from './services/api/comite.service';
import { ListepolesComponent } from './components/listepoles/listepoles.component';
import { ListeslidesComponent } from './components/listeslides/listeslides.component';
import { SlideComponent } from './components/slide/slide.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/image/image.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentService } from './services/api/comment.service';
import { PaginationComponent } from './components/pagination/pagination.component';
//import { ModalValiderActionComponent } from './components/modal-valider-action/modal-valider-action.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import {NgbdModalContent} from './pages/comite/comite.component';
import { ModalDialogModule } from 'ngx-modal-dialog';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Thirdparty Module
    NgxDatatableModule,
    NgxChartsModule,
    ClarityModule.forChild(),
    MatSlideToggleModule,
    MatDialogModule,
    NgbModule.forRoot(),
    NgbModalModule,
    ModalDialogModule.forRoot(),
    // Local App Modules
    AppRoutingModule


  ],

  declarations: [
    // Components
    BadgeComponent,
    LegendComponent,
    LogoComponent,

    //Pages -- Pages too are components, they contain other components
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,

    //Directives
    TrackScrollDirective,

    ThemesComponent,

    ThemeComponent,

    ComiteComponent,

    ListedomainesComponent,

    ListesemainesComponent,

    ListepolesComponent,

    ListeslidesComponent,

    SlideComponent,

    ImagesComponent,

    ImageComponent,

    CommentComponent,

    PaginationComponent
   // NgbdModalContent
  // ModalValiderActionComponent
  ],

  providers:[
    AuthGuard,
    UserInfoService,
    TranslateService,
    ApiRequestService,
    LoginService,
    AppConfig,
    ThemeService,
    OrganisationService,
    SemaineService,
    ComiteService,
    CommentService
  
  ],
  entryComponents: [
  //  NgbdModalContent
  //ModalValiderActionComponent
  ],
  //exports: [ NgbdModalContent ],

  bootstrap: [AppComponent]
})

export class AppModule { }
