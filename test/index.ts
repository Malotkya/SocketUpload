import * as express from "express";
import {Request, Response} from "express";
import { createServer } from "http";
import {Server} from "socket.io";
import * as path from 'path';

import Uploader from "../src/Uploader";

const expressApp = express();
const httpServer = createServer(expressApp);
const socketApp = new Server(httpServer);

const htmlFile:string = path.join(__dirname, "test.html");

expressApp.use(Uploader(socketApp));

expressApp.use("/", (req:Request, res:Response)=>{
    res.sendFile(htmlFile);
});

httpServer.listen(5000, ()=>{
    console.debug("Test app is running!");
})