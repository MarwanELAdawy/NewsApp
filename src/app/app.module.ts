import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgyptComponent } from './egypt/egypt.component';
import { UsaComponent } from './usa/usa.component';
import { CutPipe } from './cut.pipe';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    EgyptComponent,
    UsaComponent,
    CutPipe,
    NavComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
