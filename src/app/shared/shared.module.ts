import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./pages/homePage/homePage.component";
import { AboutPageComponent } from "./pages/aboutPage/aboutPage.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContactPageComponent } from "./pages/contactPage/contactPage.component";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent,
        SearchBoxComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent,
        SearchBoxComponent
    ],
})
export class SharedModule {}
