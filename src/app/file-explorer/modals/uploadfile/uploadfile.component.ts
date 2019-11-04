import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadfileComponent>) {}

  fileName: string;
  fileData: string;
  


  ngOnInit() {}
  Hello(fileData: any){
    // this.fileData = <File>fileData.target.files[0];
    this.fileName =fileData.target.files[0].name;
    console.log(fileData.target.files[0])
    
    
  }
  onSubmit(){
  this.fileData = this.fileName

  }
}
