 let homepage = function(){

    
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    
    this.getURL = function(url){
        browser.get(url)
    };

    this.enterFirstNumber = function(firstNum){
        firstNumber_input.sendKeys(firstNum);
    };

    this.enterSecondNumber = function(){
        secondNumber_input.sendKeys();
    };

    this.clickGo = goButton.click();

    this.verifyResult = function(answer){
        let result = element(by.cssContainingText('.ng-binding', answer));
        expect(result.getText()).toEqual(answer);   
    };

 };

 module.exports = new homepage();