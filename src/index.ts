import { Api } from "./api";

// CONFIG
const PORT:Number|any = process.env.HOST||3000

new Api().server.listen(PORT, ()=>{
  console.log(`Server is runnig on http://localhost:${PORT}`);
})