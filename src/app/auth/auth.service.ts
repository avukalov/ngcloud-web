import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig } from '@app/config';
import { ErrorResponse, SignoutResponse, User, UserManager } from 'oidc-client-ts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private userManager: UserManager;

  constructor(private router: Router) {
    this.userManager = new UserManager(AuthConfig.clientSettings);

    this.userManager.events.addUserLoaded(user => {
      console.log("user loaded", user);
    })
    this.userManager.events.addUserSessionChanged(() => {
      console.log("SessionChanged");
    })
    this.userManager.events.addSilentRenewError((error) => {
      // this.silentSignInError(error);
      console.log(error.name);
      
    })
  }

  public signInRedirect = (): Promise<void> => 
    this.userManager.signinRedirect();

  public signOutRedirect = (): Promise<void> => 
    this.userManager.signoutRedirect();

  public signoutRedirectCallback = (): Promise<SignoutResponse> => 
    this.userManager.signoutRedirectCallback()
      .then((res) => {
        this.authData.next(null);
        this.router.navigate(['/home'], { replaceUrl: true });
        return res;
      });;

  public signinRedirectCallback = (): Promise<User> => 
    this.userManager.signinRedirectCallback()
      .then((user) => {
        this.authData.next(user);
        this.router.navigate(['/drive'], { replaceUrl: true });
        return user;
      });

  public silentSignIn = (): Promise<User | null> => 
    this.userManager.signinSilent()
      .then((user) => {
        this.authData.next(user);
        return user;
      }).catch((error) => {
        this.silentSignInError(error);
        return error;
      });
  
  public getUser = (): Promise<User | null | undefined> => 
    this.userManager.getUser().then(user => {
      
      console.log("getUser from service", user);
      if(user)
        this.authData.next(user);

      return user;
    });

  public silentSignInError = (error: ErrorResponse): Promise<ErrorResponse | void | undefined> => {
  
    console.log("AuthService.silentSignInError.ErrorResponse", error.message);
    
    if(error && error.message 
      && this.errorResponsesRequiringUserInteraction.indexOf(error.message) >= 0) {
        return this.signInRedirect();
      }

    return new Promise((resolve, reject) => resolve(undefined));
  }

  public saveToLocalStorage(user: User){
    console.log("saveToLocalStorage", user);
  }

  private errorResponsesRequiringUserInteraction = [
    'interaction_required',
    'login_required',
    'account_selection_required',
    'consent_required',
  ];
}
