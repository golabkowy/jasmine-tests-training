// outer layer - one description for whole functionality
describe("BunchOfFunctions unit test suite description - it can contain wathever you want", function () {

    //beforeEach, afterEach, beforeAll, afterAll
    //above methods helps to keep DRY law - do not repeat yoursefl ;)

    beforeEach(function () {
        this.testErase = 'Erased';
    });

    afterEach(function () {
        // expect(this.testErase).toBe('TestNotErased');
    });

    it("Some specific unit test case", function () {
        expect(objectLiteral.variableInteger).toBe(1);
        // console.log(objectLiteral.variableInteger);

    });

    it("Test this behaviour first", function () {
        expect(this.testErase).toBe('Erased');
        this.testErase = 'TestNotErased';
        expect(this.testErase).toBe('TestNotErased');
    });

    it("Test this behaviour second",function(){
        expect(this.testErase).toBe('Erased');
    });

    //ok SPIes SPY najważniejsze

    it('Spies test',function(){
        // very very important, 1st argument is an object, 2nd is an method name.
        // if we have some function, which is not attached to some object in code,
        // it is always attached to "window" object
        // or we can create spy manually by createSpy() function

        spyOn(objectLiteral,'additionFun');
        objectLiteral.additionFun(3,3);
        expect(objectLiteral.additionFun).toHaveBeenCalled();
        expect(objectLiteral.additionFun).toHaveBeenCalledWith(3,3);
        ;
    });

    it('Create fake objects and functions with jasmine.createSpy()', function(){

    });

});
