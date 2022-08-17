import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AuthPageAction } from '../../state/actions';
import { AuthState } from '../../state/auth.reducer';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  @Input() isLoading: boolean | undefined;
  @Input()
  currentUser: String | '' = '';

  @ViewChild('username') inputEl: ElementRef | undefined;

  loginFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  form: any;
  //currentUser: String | '' = '';
  constructor(
    private messageService: MessageService,
    private router: Router,
    private store: Store<AuthState>,
    private authService : AuthService,
    private route : Router,
    private rou:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.rou.snapshot.queryParams['returnUrl'] || '/dashboard/dashboard';
    this.loginFormGroup = new FormGroup({
      usernameOremployeeId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login(): void {
    if (this.loginFormGroup.valid) {
      this.isLoading = true;
      let payload = {
        ...this.loginFormGroup.value,
      };
      //localStorage.setItem('username',this.loginFormGroup.controls['username'].value);
      this.store.dispatch(AuthPageAction.startLogin(payload));
      this.currentUser = this.loginFormGroup.controls['usernameOremployeeId'].value;

      if (this.currentUser.toLowerCase() === 'Rani'.toLowerCase()) {
        this.router.navigate(['/usermanagement/user']);
      } else {
        this.router.navigate(['/dashboard/dashboard']);
      }
      // alert(JSON.stringify(this.loginFormGroup.value));
      this.messageService.add({
        severity: 'success',
        summary: 'Login Message',
        detail: 'Login sucess',
      });
    }
  }
  tinyAlert() {
    Swal.fire('Hey there!');
  }
  handleClick(event : any)
  {
    
  
     console.log(this.loginData);
    this.authService.userLogin(this.loginData)
        .subscribe(
          {
            
          next:(value) => {
          {
          //alert("correct login");
          // Swal.fire({
          //   title: 'Are you sure?',
          //   text: 'This process is irreversible.',
          //   icon: 'warning',
          //   showCancelButton: true,
          //   confirmButtonText: 'Yes, go ahead.',
          //   cancelButtonText: 'No, let me think',
          // }).then((result) => {
          //   if (result.value) {
          //     Swal.fire('Removed!', 'Product removed successfully.', 'success');
          //   } else if (result.dismiss === Swal.DismissReason.cancel) {
          //     Swal.fire('Cancelled', 'Product still in our database.)', 'error');
          //   }
          // });
          Swal.fire({ icon: 'success',  title: 'Hi'+' '+this.loginData.usernameOremployeeId+' ',  timer:3000,text: 'You have LoggedIn SuccessFully',footer: 'Hi'+this.loginData.usernameOremployeeId});
        //  Swal.fire('Hi'+ ' ' +this.loginData.usernameOremployeeId, 'You have Logged in Succesfully!', 'success');
           // this.router.navigateByUrl(this.returnUrl);
            this.route.navigate(['/dashboard/dashboard']);
            console.log(this.loginData.usernameOremployeeId);
            // this.messageService.add({
            //   severity: 'success',
            //   summary: 'Login Message',
            //   detail: 'Login sucess',
            // });
            
          }
          // else
          // {
          //   this.messageService.add({severity:'error', summary: 'Failed', detail: 'Login Failed'});
          //   console.log("Login Failed");
          // }
        },error:() => {
          Swal.fire({ icon: 'warning',  title: 'Hi'+' '+this.loginData.usernameOremployeeId+' ',  timer:3000,text: 'is a InCorrect Login',footer: ''});
         // alert("incorrect login");
         // Swal.fire('incorrect login');
         // this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: 'Message Content'});
          console.log("idea loading");
        },complete: () => {
         // console.log('Observer got a complete notification');
          this.messageService.add({severity:'error', summary: 'Failed', detail: 'Login Failed'});
        }
      }
        );
    
  }
  loginData = {
    usernameOremployeeId: '',
    password : ''
  };
}
