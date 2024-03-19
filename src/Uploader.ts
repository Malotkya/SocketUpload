import { Server, Socket, Namespace } from "socket.io";
import { Request, Response, Router } from "express";
import * as path from "path";
import {name} from "./Constants";

const jsFile:string = path.join(__dirname, "element.js");

export default function Uploader(server:Server, props:any = {}){
    const router:Router = Router();

    server.on('connection', (socket:Socket)=>{
        
    });

    

    router.get(`/${name}.js`, (req:Request, res:Response)=>{
        res.sendFile(jsFile);
    });

    return router;
}