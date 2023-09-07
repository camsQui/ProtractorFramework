// let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function(){

        //POM
        // homepage.getURL('https://juliemr.github.io/protractor-demo/');
        // homepage.enterFirstNumber('5');
        // homepage.enterSecondNumber('9');
        // homepage.clickGo();
        
        // homepage.verifyResult('14');

        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('16');
        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding', '20'));
        expect(result.getText()).toEqual('20');


        browser.sleep(3000);        
    });


    // it('subtraction test', function(){

    //     browser.get('https://juliemr.github.io/protractor-demo/');
    //     element(by.model('first')).sendKeys('4');
    //     element(by.model('second')).sendKeys('16');
    //     element(by.css('[ng-click="doAddition()"]555')).click();

    //     let result = element(by.cssContainingText('.ng-binding', '20'));
    //     expect(result.getText()).toEqual('20');


    //     browser.sleep(3000);        
    // });

});


