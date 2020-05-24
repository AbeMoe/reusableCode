const expect = require("chai").expect;
const hasRole = require(__dirname+'/good.js').hasRole;
const role = require(__dirname+'/bad.js');


describe("Check Authorization Level",function()
{
  describe("bad wrapper example", function()//6ix9ine
  {
    
    let admin = {name:'brad',role:'admin'};
    let wizard = {name:'brad',role:'wizard'};
    let lizard = {name:'brad',role:'lizard'};
    it('tests for isAdmin',function()
    {
      expect(role.isAdmin(admin)).to.equal(true);
      expect(role.isAdmin(wizard)).to.equal(false);
    })
    it('tests for isWizard',function()
    {
      expect(role.isWizard(wizard)).to.equal(true);
      expect(role.isWizard(lizard)).to.equal(false);
    })
    it('tests for isLizard',function()
    {
      expect(role.isLizard(lizard)).to.equal(true);
      expect(role.isLizard(wizard)).to.equal(false);
    })

    
  })
  
  describe("good wrapper example", function()//The real slim shady
  {
    let user = {name:'brad',role:'admin'};
    it('empty array',function()
    {
      expect(hasRole([],user)).to.equal(false);
    })

    it('array with admin in it',function()
    {
      expect(hasRole(['admin','lizard','wizard'],user)).to.equal(true);
    })
    it('array without admin in it',function()
    {
      expect(hasRole(['user','lizard','wizard'],user)).to.equal(false);
    })
  })
  
})