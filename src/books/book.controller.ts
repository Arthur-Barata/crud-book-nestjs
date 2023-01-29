import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import BookDto from "./book.dto";
import BookService from "./book.service";

@Controller("book")
export default class BookController{
    constructor(private bookService:BookService){
    }
    @Post()
    async create (@Body() data:BookDto){
    const cad = await this.bookService.create(data)
  
    }

    @Get()
    async findAll(){
        const show =this.bookService.findAll()
        return show
    }
    
    @Get(':id')
    async findOne (@Param("id") id:string){
        return await this.bookService.findOne(id)
    }

   

}