/**
 * Created by Marcelo Inphonex on 21/07/2017.
 */
// spec.js
describe('Login in R! Application', function() {

      it('should be able to login with an admin user', function() {
       //access R! page
        browser.get('http://login.qc.dev.ringbyname.com/current');
        expect(browser.getTitle()).toEqual('RingByName');

        //make login with admin user
        element(by.name('username')).sendKeys('devqc.user4@ringbyname.com');
        element(by.model('data.password')).sendKeys('123456asd');
        element(by.buttonText('Sign In')).click();

        expect(browser.getTitle()).toEqual('RingByName');

    })
    it('login with wrong user', function(){
            //access R! page
            browser.get('http://login.qc.dev.ringbyname.com/current');
            expect(browser.getTitle()).toEqual('RingByName');

            //make login with admin user
            element(by.name('username')).sendKeys('devqc.userx@ringbyname.com');
            element(by.model('data.password')).sendKeys('123456asd');
            element(by.buttonText('Sign In')).click();

            expect(browser.getTitle()).toEqual('RingByName');

    }
    )
});
