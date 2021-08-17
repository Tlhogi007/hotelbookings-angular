import {NgModule} from '@angular/core';

import {MatButton, MatButtonModul,MaToolbarModule,MatIconModule,MatSidenavModule} from '@angular/material';

@NgModule({
    imports: [MatBadgeModule,MatButtonModule,MatSidenavModule,MatButtonModule],
    exports: [MatBadgeModule,MatButtonModule,MatButtonModule,MaToolbarModule]
})


export class MaterialModule {}