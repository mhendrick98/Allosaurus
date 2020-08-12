console.log("Welcome to allosaurus!");

export class Cache {
  // max number of files in Cache
  public maxCap: number;

  // location of cache
  public location: string;

  // constructor for new cache
  constructor(max: number, loc: string) {
    this.maxCap = max;
    this.location = loc;
  }

  // get
  async alloRead(name: string): Promise<object> {
    try {
      const decoder = new TextDecoder("utf-8");
      const data = await Deno.readFile(this.location + name + ".json");
      const ret = decoder.decode(data);
      return JSON.parse(ret);
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  }

  // set - returns true if success / false otherwise
  async alloWrite(name: string, obj: object): Promise<boolean> {
    try {
      const fileName: string = this.location + name + ".json";
      const content: string = JSON.stringify(obj);
      await Deno.writeTextFile(fileName, content);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
