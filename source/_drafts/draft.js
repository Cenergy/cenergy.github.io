
class Circle{
    constructor(radius){
        this.radius
        =radius
    }
    // Instance Method
    draw(){

    }
    // Static Mthod
    static parse(str){
        const {radius}=JSON.parse(str)
        return new Circle(radius)
    }
}
const circle=Circle.parse('{"radius":1}')
console.log("Go: circle", circle) // Go: circle Circle { radius: 1 }