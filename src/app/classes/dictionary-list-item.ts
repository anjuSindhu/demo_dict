import { Dictionary } from './dictionary';

export class DictionaryListItem {
    public name:string;
    public data: Dictionary;
        //constructor(){}
    constructor(name:string, data:Dictionary) {
        this.name = name;
        this.data = data; 
    }

    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    getDictionary(): Dictionary{
        return this.data;
    }
    setDictionary(dic:Dictionary){
        this.data = dic;
    }

}
