class Node {
    type: string;
    name: string;
    relation_type: string;
    constructor(type?: string, name?: string, relation_type?: string) {
        this.type = type
        this.name = name
        this.relation_type = relation_type
    }
}
export { Node }