import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileElement } from './file-explorer/model/file-element';
import { FileService } from './service/explorer-service';
import { HttpClient, HttpParams }    from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fileElements: Observable<FileElement[]>;
  public recipeSubscription: Subject<any> = new Subject();
  constructor(public fileService: FileService, public http:HttpClient) {}
  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
  
   
   
    this.loadFileELementsQuery()
    
    
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }


  

  addFile(file: { name: string }) {
    this.fileService.add({ isFolder: false, name: file.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }


  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }
  
  getFileElements(){
    this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root').subscribe((res)=>{
      

      return res
    })
  }
  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
    
    
    
    
  
      
    
  }
  
  loadFileELementsQuery(){
  this.fileService.isLoading=true
  this.http.get<FileElement[]>('https://file-explorer-10665.firebaseio.com/test.json').subscribe(
      res=>{
           console.log(res)
           if(res)   
           res.forEach(element => {
            this.fileService.addtoMap(element)
            
          });

  
    this.updateFileElementQuery()
        
    this.fileService.isLoading=false  

      }
  )
  

  }
  
  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }
}
