import { Module } from "@nestjs/common";
import BookController from "./book.controller";
import BookService from "./book.service";
import { PrismaService } from "../database/prisma.service";

@Module({
    imports:[],
    controllers:[BookController],
    providers:[BookService,PrismaService],
    

})
export class BookModule{
}