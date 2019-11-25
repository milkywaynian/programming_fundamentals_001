const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 43.2 when passed 36", () => {
      expect(utils.addVAT(36)).toBe(43.2);
  });
});

describe("utils.getFullName", () => {
    test("returns Jennifer Lopez when passed Jennifer and Lopez", () => {
      expect(utils.getFullName("Jennifer", "Lopez")).toBe("Jennifer Lopez");
    });
});

describe("utils.makeHalfPrice", () => {
    test("returns 1 when passed 2", () => {
      expect(utils.makeHalfPrice(2)).toBe(1);
    });
});

describe("utils.countBooks", () => {
  test("returns 2 when passed 'Harry Potter' and 'Growth Mindset'", () =>{
    expect(utils.countBooks(['Harry Potter', 'Growth Mindset'])).toBe(2);
  });

  test("returns 3 when passed 'Northern Lights', 'Harry Potter' and 'Growth Mindset'", () =>{
    expect(utils.countBooks(['Northern Lights', 'Harry Potter', 'Growth Mindset'])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if book quantity is > 0", () => {
   const book = {
     title: 'The Stone Diaries',
     quantity: 0
  };
   expect(utils.isInStock(book)).toBe(false);
  });
})

describe("getTotalOrderPrice", () => {
  test("multiplies the price of the book by the quantity desired, and then applies a VAT of 20% to the total order", () =>{
    expect(utils.getTotalOrderPrice(8, 10)).toBe(96);
  });
});

