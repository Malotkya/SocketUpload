import { Socket } from "socket.io-client";
import {name} from "./Constants";

class UploadElement extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define(name, UploadElement);