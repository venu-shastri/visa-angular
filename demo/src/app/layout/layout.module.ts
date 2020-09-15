import {NgModule} from '@angular/core'
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import {ContentComponent} from './content/content.component'
import {ParagraphComponent} from './paragraph/paragraph.component'
@NgModule({
  declarations:[HeaderComponent,FooterComponent,ContentComponent,ParagraphComponent],
  exports:[HeaderComponent,FooterComponent,ContentComponent,ParagraphComponent],
  imports:[]
})
export class LayoutModule{

}
