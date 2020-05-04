let mocks = require("../src/mocks-and-spies");

describe("Should verify() test", function () {
  it("call the function getNumber()", function () {
    var owner = new mocks("0785825279", "approved");

    spyOn(owner, "getNumber");

    owner.verification();

    expect(owner.getNumber).toHaveBeenCalled();
  });

  it(" call the function getMessage()", function () {
    var owner = new mocks("0785825279", "approved");

    spyOn(owner, "getMessage");

    owner.verification();

    expect(owner.getMessage).toHaveBeenCalled();
  });
});
