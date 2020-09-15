import {NgModule} from '@angular/core'
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import {ContentComponent} from './content/content.component'
@NgModule({
  declarations:[HeaderComponent,FooterComponent,ContentComponent],
  exports:[HeaderComponent,FooterComponent,ContentComponent],
  imports:[]
})
export class LayoutModule{

}
