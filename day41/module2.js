module.exports.Area = class {
    rectArea = (x,y) => {
        return x*y;
    }
    circleArea = (r) => {
        return Math.PI * r*r;
    }
}

module.exports.Cylinder = class{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    volume = () => {
        return Math.PI*(this.radius**2)*this.height;
    }
    totalSurfaceArea = () => {
        return 2*Math.PI*this.radius*(this.height+this.radius);
    }
}