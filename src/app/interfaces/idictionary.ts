export interface Idictionary {
    Add(key: string, value: string);
    ContainsKey(key: string): boolean;
    Count(): number;
    Item(key: string): string;
    Keys(): string[];
    Remove(key: string): string;
    Values(): string[];
}
