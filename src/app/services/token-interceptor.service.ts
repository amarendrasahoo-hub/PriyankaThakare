import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req, next){
    let loginService = this.injector.get(LoginService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${loginService.getToken()}`
        //Authorization: 'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizedReq)
  }
}
