//A
interface IBook {
    title: string,
    author: string,
    published?: Date,
    pages: number
};

function testBook(book: IBook) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}
//B/D/E
const b1 = {
    title: "Moby Dick",
    author: "Herman Melville",
    //published: new Date("1851-10-18"),
    pages: 500
};

testBook(b1);

//C
//According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types. 
//TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.

//F

//class Book implements IBook {
    //private _name : String;
    //#title: string
    //#author: string
    //#published: Date
    //#pages: number

  //  constructor(title: string) { this.#title = title }
   // get title(): string { return this.#title }
    //set title(title: string) { this.#title = title }
    //toString():string {return '${this.#title}, ${this.#author}, ${this.#published}, ${this.#pages}'}
//}