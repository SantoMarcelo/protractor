/**
 * Created by Marcelo Inphonex on 21/07/2017.
 */
// spec.js
describe('angularjs todo mvc homepage', function() {
    it('should have a title', function() {
        browser.get('http://login.qc.dev.ringbyname.com/current');

        expect(browser.getTitle()).toEqual('RingByName');
    });
});

describe('Login in R! application', function()){
    it('should be able to login with a admin user', function() {

        element(by.id('username')).sendKeys('devqc.user4@ringbyname.com');
        element(by.name('password')).sendKeys('123456asd');
        element(by.)
    })
}