import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { HeaderTabComponent } from './header-tab/header-tab.component';


@NgModule({
  declarations: [ExploreContainerComponent, HeaderTabComponent],
  imports: [ CommonModule, IonicModule, FormsModule],
  exports: [ExploreContainerComponent, HeaderTabComponent]
})
export class MisComponentesModule { }
