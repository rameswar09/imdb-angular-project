import {Injectable} from '@angular/core'

@Injectable()
export class detailsService{
  itemDetails=""
  constructor(){}
 setData=(data)=>{
    this.itemDetails=data
 }
 getData=()=>{
   return this.itemDetails
 }
 setPersonData=(data)=>{
    this.itemDetails=data
 }
}
