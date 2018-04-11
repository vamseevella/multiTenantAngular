import {NgModule} from '@angular/core';

import {LibComponent} from './component/lib.component';
import {LibService} from './service/lib.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule {
}
