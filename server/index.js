import dotenv from "dotenv";
dotenv.config();

import { Server } from "./src/server";

(async () => {
    try {
        const server = new Server();
        await server.execute();
    } catch (error) {
        console.log(error);
    }
})();


