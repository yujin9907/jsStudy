function test(name, num){
    this.name=name;
    this.num=num;
    this.doTest = function() {
        return this.num + "테스트 출력 과목" + this.name;
    }
}

var firstTest = new test("자바스크립트 기초 이론", 11);
firstTest.hasOwnProperty("name"); // 
firstTest.hasOwnProperty("class");
