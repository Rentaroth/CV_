import { app } from "./server";

const port: number = 8000;

app.listen(port, () => {
  console.log(`[Server]: Server listening at port ${port}`)
});