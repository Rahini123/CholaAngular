import { SharedModule } from './../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './state/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/layouts/auth/services/auth.service';
 import {ToastModule} from 'primeng/toast';



import { AuthGuard } from 'src/app/layouts/auth/guards/auth.guard';
import { AuthEffects } from './state/auth.effects';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
     ToastModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    //ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    
  ],
})
export class AuthModule {}
