import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { FileExplorerComponent } from './file-explorer.component';


import { UploadfileComponent } from './modals/uploadfile/uploadfile.component'
import { NewFolderDialogComponent } from './modals/Add Folder/new-folder-dialog.component';
import { RenameDialogComponent } from './modals/Rename/rename-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  declarations: [FileExplorerComponent, NewFolderDialogComponent, RenameDialogComponent, UploadfileComponent],
  exports: [FileExplorerComponent],
  entryComponents: [NewFolderDialogComponent, RenameDialogComponent,UploadfileComponent]

})
export class FileExplorerModule {}