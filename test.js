const expect = require("chai").expect;
const {onlyAllow,dontAllow} = require(__dirname+'/good.js');
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
    let admin = {name:'brad',role:'admin'};
    let wizard = {name:'brad',role:'wizard'};
    let lizard = {name:'brad',role:'lizard'};
    let onlyAdmins = onlyAllow(['admin']);
    let noLizards = dontAllow(['lizard']);

    it('only allow tests',function()
    {
      expect(onlyAdmins(admin)).to.equal(true);
      expect(onlyAdmins(lizard)).to.equal(false);
    })

    it('Dont allow tests',function()
    {
      expect(noLizards(wizard)).to.equal(true);
      expect(noLizards(lizard)).to.equal(false);

    })
  })
  
})