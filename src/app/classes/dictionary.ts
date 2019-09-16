import { Idictionary } from '../interfaces/idictionary';

export class Dictionary implements Idictionary{
    public items: { [index: string]: string } = {};
    public dic_name: string;
    //public dict_data = new Map();
    /*constructor(name:string, data:Map<string,string>){
        this.dic_name = name;
        this.items = data;
    }*/
    private count: number = 0;
 
    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }
 
    public Count(): number {
        return this.count;
    }
 
    public Add(key: string, value: string) {
        if(!this.items.hasOwnProperty(key))
             this.count++;
 
        this.items[key] = value;
    }
 
    public Remove(key: string): string{
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }
 
    public Item(key: string): string {
        return this.items[key];
    }
 
    public Keys(): string[] {
        var keySet: string[] = [];
 
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
 
        return keySet;
    }
 
    public Values(): string[] {
        var values: string[] = [];
 
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
 
        return values;
    }
}
