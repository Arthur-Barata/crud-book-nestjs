import { PrismaService } from "src/database/prisma.service";
import BookDto from "./book.dto";
import { PrismaClient } from '@prisma/client';
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { HttpStatus } from "@nestjs/common";
const prisma = new PrismaClient() 

export default class BookService{
    constructor(private prism:PrismaService){
    }
 
    
    async create (data:BookDto){
     
        
        const bookExist= await prisma.book.findFirst({where:{barCode:data.barCode}})
        if(bookExist){  
            throw new HttpException("livro ja cadastrado",HttpStatus.BAD_REQUEST)   
        }
         await prisma.book.create({data}) 
    }

    async findAll(){        
        return await  prisma.book.findMany()
     }

    async findOne(barCode:string){
      const book =  await prisma.book.findUnique({where:{barCode}})
        return book
    }
   
}