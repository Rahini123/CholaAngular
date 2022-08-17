import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

import {
  AuthState,
  selectUsername,
} from 'src/app/layouts/auth/state/auth.reducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/layouts/auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  display: boolean = false;
  breadcrumb: any;
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  currentUser: Observable<object | null> | undefined;
  username: any;
  editprofileFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    title:new FormControl(''),
    phoneNumber:new FormControl(''),
    mobileNumber:new FormControl('')
  });

  constructor(
    private store: Store<AuthState>,
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private authService : AuthService,
    private route : Router,
    private rou:ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.editprofileFormGroup=new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
    })
    this.currentUser = this.store.select(selectUsername);
    this.currentUser.subscribe((res: any) => {
      this.username = res ? res.username : null;
    });

    this.items = [
      { label: 'General', icon: 'pi pi-fw pi-user-edit' },
      {
        label: 'Change Password',
        icon: 'pi pi-fw pi-lock',
        visible: false,
        routerLinkActiveOptions: { exact: true },
      },
    ];
    this.activeItem = this.items[0];
  }

  showDialog() {
    this.display = true;
  }
  closeItem(e: any, a: any) {}

  handleChange(e: any) {
    if (e.index == 0) {
      this.breadcrumb = [
        {
          label: 'Profile/General',
          url: '',
        },
      ];
    } else if (e.index == 1) {
      this.breadcrumb = [
        {
          label: 'Profile/Change Password',
          url: '',
        },
      ];
    }
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
  CreateProfile = {
    firstName: '',
    lastName:'',
    title:'',
    phoneNumber:'',
    mobileNumber: ''
  };
  profileCreate(event:any)
  {
    this.authService.profileEdit(this.CreateProfile).subscribe(data=>{
      console.log(data);
    })
    // console.log(this.CreateProfile.firstName);
    
    // var formData: any = new FormData();
    // formData.append('firstName', this.CreateProfile.firstName);
    // formData.append('lastName', this.CreateProfile.lastName);
    // formData.append('title', this.CreateProfile.title);
    // formData.append('phoneNumber', this.CreateProfile.phoneNumber);
    // formData.append('mobileNumber', this.CreateProfile.mobileNumber);
    // this.http
    // .post('http://localhost:9090/TicketManager/createOrUpdateAgentDetails', formData)
    // .subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.log(error),
    // });
  }
  
}
