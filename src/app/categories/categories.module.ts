import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { AdminGuard } from "../authentication/admin.guard"
import { AuthenticationModule } from "../authentication/authentication.module"
import { CategoryCreateComponent } from "./category-create/category-create.component"
import { CategoryListComponent } from "./category-list/category-list.component"

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryCreateComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AuthenticationModule,
        RouterModule.forChild([
            { path: 'categories/create', component: CategoryCreateComponent, canActivate: [AdminGuard]},
        ])
    ],
    exports: [
        CategoryListComponent,
        CategoryCreateComponent,
    ]
})

export class CategoriesModule {
    
}