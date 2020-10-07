// lets make some JS objects in three approaches

// 1. Witch prototype - done
// 2. With new() operator or constructor
// 3. Object.create.method
// 4. Simple JS literal - done

var objectLiteral = {
    variableInteger: 1,
    variableString: 'StringVariableLiteral',
    additionFun: function (a, b) {
        return a + b;
    }
}

const innerFun1 = () => {
    return 5;
}

const innerFun2 = () => {
    console.log('inner function 2');
}

const outerFun = () => {
    innerFun1()
    innerFun2()
}

function TestObject() {
}

TestObject.prototype.innerFunction = () => {
    console.log("inner");
}


