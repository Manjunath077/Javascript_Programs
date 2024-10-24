class Rectangle{
    constructor(length,breadth){
        this.length = length
        this.breadth = breadth
    }
    area(){
        return `Area of rectangle is ${this.length * this.breadth}`
    }
    perimeter(){
        return `Perimeter of rectangle is ${2 * (this.length + this.breadth)}`
    }
    
}
let r1 = new Rectangle(5,5)
let area = r1.area()
console.log(area)
let perimeter = r1.perimeter()
console.log(perimeter)