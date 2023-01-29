import { Injectable } from "@nestjs/common"

@Injectable()
export default class BookDto{
    
    id:string
    title:string
    description:string
    barCode:string
}