import { Injectable } from '@angular/core'

import { v4 } from 'uuid'

import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs'
import { FileElement } from '../file-explorer/model/file-element';
import { HttpClient } from '@angular/common/http';
import {map, tap, take, exhaustMap} from 'rxjs/operators'
import { element } from 'protractor';

export interface IFileService {
  add(fileElement: FileElement)
  delete(id: string)
  update(id: string, update: Partial<FileElement>)
  queryInFolder(folderId: string): Observable<FileElement[]>
  get(id: string): FileElement
}

@Injectable(
  {providedIn:"root"}
)
export class FileService implements IFileService {
  private map = new Map<string, FileElement>()
  
  private files:FileElement[]=[]


 
  public isLoading=false

  

  constructor(private http: HttpClient) {}
  
  add(fileElement: FileElement) {
    fileElement.id = v4()
    this.map.forEach(element=>{
      if(fileElement.name ==element.name)
      {
       fileElement.name= fileElement.name+'(1)'
      }

    })
    this.map.set(fileElement.id, this.clone(fileElement))
    return fileElement
  }
  addtoMap(fileElement:FileElement){
    this.map.set(fileElement.id, this.clone(fileElement))
    return fileElement
  } 

  delete(id: string) {
    this.map.delete(id)
  }

  update(id: string, update: Partial<FileElement>) {
    let element = this.map.get(id)
    element = Object.assign(element, update)
    this.map.set(element.id, element)
  }

  private querySubject: BehaviorSubject<FileElement[]>
  queryInFolder(folderId: string) {
    const result: FileElement[] = []
    // console.log(this.map)
    
    
    this.map.forEach(element => {
      if (element.parent === folderId) {
        result.push(this.clone(element))
      }
    })
    

    if (!this.querySubject) {
      this.querySubject = new BehaviorSubject(result)
    } else {
      this.querySubject.next(result)
    }
   
   if(!this.isLoading){
     console.log("HELLO THIS SHOULD NOT BE WORKING")
    const files :FileElement[] = []
    this.map.forEach(element=>{
      files.push(element)
      // console.log(files)
 
 
 
 
 
     })
    //  console.log(files)

    this.http.put('https://file-explorer-10665.firebaseio.com/test.json',files).subscribe(
      res1=>{
        console.log( res1)
      })
   }
    
    // this.http.get('https://file-explorer-10665.firebaseio.com/test.json').subscribe(
    //   res=>{
    //     console.log(res)
    //   }
    // )

    return this.querySubject.asObservable()

         
  }
  
  get(id: string) {
    return this.map.get(id)
  }

  clone(element: FileElement) {
    return JSON.parse(JSON.stringify(element))
  }
  getFiles(){
    console.log(this.map)
    this.map.forEach(element=>{
     this.files.push(element)
    //  console.log(this.files)





    })
    return this.files
  }

  
  
}
