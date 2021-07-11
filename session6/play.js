class x{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    u(){
        /////
    }
    static z(){
        console.log('z')
    }
}

const test = new x(5,3)
test.u()
x.z()
test.z()
