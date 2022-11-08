import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InteceptorService2 implements HttpInterceptor{

  constructor(public loaderService:LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isNotLoading.next(false)

    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loaderService.isNotLoading.next(true)
        }
      )
    )
  }
  
}
