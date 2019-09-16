export class InconsistentDictoinary {
    private dic_name:string;
    private incons_data: {};
    private count: number = 0;
    private dupSev: string = "2";
    private forkSev: string = "1";

    constructor(name:string, data:{}) {
        this.dic_name = name;
        this.incons_data = data; 
    }

    public Add(key: string, value: string) {
        if(!this.incons_data.hasOwnProperty(key))
             this.count++;
 
        this.incons_data[key] = value;
    }

    public Count(): number {
        return this.count;
    }

    public setDup(key){
        this.incons_data[key] = this.dupSev;
    }

    public setFork(key){
        this.incons_data[key] = this.forkSev;
    }
}
