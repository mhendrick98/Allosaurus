import { Cache } from "./index.ts";

const cache: Cache = new Cache(1, "/Users/MichaelHendrick/allosaurus/");
const obj: Object = { username: "kathryn", password: "124abc" };
cache.alloWrite("test_three", obj);
cache.alloRead("test_three").then(response => {
  console.log(response);
});
