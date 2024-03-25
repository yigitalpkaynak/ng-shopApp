import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { environment } from 'src/environments/environment';
import { AuthService } from './authentication/auth/auth.service';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  private title = 'Home Page';
  public Editor = ClassicEditor;

  constructor (private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.autoLogin();
    console.log(environment.production);
    console.log(environment.adminEmail);
  }
}
