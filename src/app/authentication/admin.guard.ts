import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth/auth.service";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.authService.user.pipe(
            map(user => {
                return !!user && user.email == environment.adminEmail;
            }),
            tap(isAdmin => {
                if(!isAdmin) {
                    this.router.navigate(['/auth']);
                }
            })
        );
    }

}