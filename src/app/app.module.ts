import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatBadgeModule,
  MatExpansionModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreateNoteComponent } from './create-note/create-note.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InitiateNoteComponent } from './initiate-note/initiate-note.component';
import { HeaderNewComponent } from './header-new/header-new.component';
import { AssetReqComponent } from './asset/asset-req/asset-req.component';
import { AssetService } from './services/asset.service';
import { LoginService } from './services/login.service';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginNewComponent } from './login-new/login-new.component';
import { NotificationComponent } from './notification/notification.component';
import { HardsoftComponent } from './request/hardsoft/hardsoft.component';
import { CancelComponent } from './request/cancel/cancel.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { CreatecrComponent } from './change-request/createcr/createcr.component';
import { UatComponent } from './change-request/uat/uat.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material';
import { WorkFlowDialogComponent } from './workflow/workflow-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthGuard } from './auth.guard';
import { SharedfolderAccessComponent } from './sharedfolder-access/sharedfolder-access.component';
import { SharedfolderComponent } from './sharedfolder/sharedfolder.component';
import { WebmailAccessComponent } from './webmail-access/webmail-access.component';
import { UsbAccessComponent } from './usb-access/usb-access.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CKEditorModule } from 'ng2-ckeditor';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { SubmitUatComponent } from './submit-uat/submit-uat.component';
import { AddrowUatComponent } from './addrow-uat/addrow-uat.component';
import { RichtextEditorComponent } from './richtext-editor/richtext-editor.component';
import { AdminComponent } from './admin/admin.component';
import { TokenInterceptorService } from './services/token-interceptor.service'

//for nested mat table newly added
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { IntroComponent } from './intro/intro.component';
import { AccountComponent } from './account/account.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { SapRequestsComponent } from './sap-requests/sap-requests.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RemoteAccessComponent } from './remote-access/remote-access.component';
import { ApproverComponent } from './approver/approver.component';
import { TestmatComponent } from './testmat/testmat.component';
import { AdminDialogComponent } from './admin/admin-dialog.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    CreateNoteComponent,
    LoginComponent,
    HomeComponent,
    InitiateNoteComponent,
    HeaderNewComponent,
    AssetReqComponent,
    FooterComponent,
    ProfileComponent,
    LoginNewComponent,
    NotificationComponent,
    HardsoftComponent,
    CancelComponent,
    MyAssetsComponent,
    CreatecrComponent,
    UatComponent,
    WorkflowComponent,
    WorkFlowDialogComponent,
    SharedfolderAccessComponent,
    SharedfolderComponent,
    WebmailAccessComponent,
    UsbAccessComponent,
    TextEditorComponent,
    SubmitUatComponent,
    AddrowUatComponent,
    RichtextEditorComponent,
    AdminComponent,
    IntroComponent,
    AccountComponent,
    AssetManagementComponent,
    SapRequestsComponent,
    ContactUsComponent,
    RemoteAccessComponent,
    ApproverComponent,
    TestmatComponent,
    AdminDialogComponent,
    MyRequestsComponent,
    ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    FlexLayoutModule,
    CKEditorModule,

    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [
    AssetService, AuthGuard, LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true 
    }],
  bootstrap: [AppComponent],
  entryComponents: [WorkFlowDialogComponent, TextEditorComponent, AddrowUatComponent, AdminComponent, AdminDialogComponent]

})

export class AppModule { }
