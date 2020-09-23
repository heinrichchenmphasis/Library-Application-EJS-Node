describe("Checkout Database Tests", function() {

describe("constructor", function() {
    beforeEach(function() {
      checkoutDatabase = new CheckoutDatabase();
    });
  
    it("has an empty array of checkouts", function() {
      assert.deepEqual(checkoutDatabase.checkouts, []);
    });

    it("has a current id of 0", function() {
      assert.deepEqual(checkoutDatabase.currentId, 0);
    });

});
  
describe("create", function() {
    beforeEach(function() {
      
      bookDatabase = new BookDatabase();
      memberDatabase = new MemberDatabase();
    
      checkoutDatabase = new CheckoutDatabase(bookDatabase, memberDatabase);
    });
  
    it("does not create a checkout if either book or member does not exist", function (){

      checkoutDatabase.create(999,999,"2020-09-14");
      assert.deepEqual(checkoutDatabase.checkouts, []);

      bookDatabase.create("Bible", "God", "123");
      checkoutDatabase.create(0,999,"2020-09-14")
      assert.deepEqual(checkoutDatabase.checkouts, []);

      memberDatabase.create("Tom", "Jerry");
      checkoutDatabase.create(999,0,"2020-09-14")
      assert.deepEqual(checkoutDatabase.checkouts, []);

      checkoutDatabase.create(0,0,"2020-09-14")
      assert.deepEqual(checkoutDatabase.checkouts[0], {bookId: 0, memberId: 0, period:"2020-09-14", id: 0});
    });

    it("does not create a checkout if a book is already checked out", function() {

      bookDatabase.create("Bible", "God", "123");
      bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
      bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
      bookDatabase.create("Diary", "Heinrich", "1");

      memberDatabase.create("Bob", "Builder");
      memberDatabase.create("Heinrich", "Chen");
      memberDatabase.create("Ayla", "Mao");
      memberDatabase.create("John", "Smith");

      checkoutDatabase.create(2,1,"2020-09-14")
      assert.deepEqual(checkoutDatabase.checkouts[0], {bookId: 2, memberId: 1, period:"2020-09-14", id: 0});
      assert.deepEqual(checkoutDatabase.checkouts.length, 1);

      checkoutDatabase.create(2,3,"2020-09-14")
      assert.deepEqual(checkoutDatabase.checkouts.length, 1);
    });

    it("adds a checkout with the given parameters", function() {

        bookDatabase.create("Bible", "God", "123");
        bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
        bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
        bookDatabase.create("Diary", "Heinrich", "1");

        memberDatabase.create("Bob", "Builder");
        memberDatabase.create("Heinrich", "Chen");
        memberDatabase.create("Ayla", "Mao");
        memberDatabase.create("John", "Smith");

        checkoutDatabase.create(2,1,"2020-09-14")

        assert.deepEqual(checkoutDatabase.checkouts[0], {bookId: 2, memberId: 1, period:"2020-09-14", id: 0});
    });
  

  });
  
  describe("read", function() {
    beforeEach(function() {
      bookDatabase = new BookDatabase();
      memberDatabase = new MemberDatabase();
    
      checkoutDatabase = new CheckoutDatabase(bookDatabase, memberDatabase);
    });
  
    it("gets checkout by id", function() {
      bookDatabase.create("Bible", "God", "123");
      bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
      bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
      bookDatabase.create("Diary", "Heinrich", "1");

      memberDatabase.create("Bob", "Builder");

      checkoutDatabase.create(1,0,"2020-09-14")
      checkoutDatabase.create(3,0,"2020-05-15")

      assert.deepEqual(checkoutDatabase.read(0), {bookId: 1, memberId: 0, period:"2020-09-14", id: 0});
      assert.deepEqual(checkoutDatabase.read(1), {bookId: 3, memberId: 0, period:"2020-05-15", id: 1});
    });
  });

  describe("update", function() {
    beforeEach(function() {
      bookDatabase = new BookDatabase();
      memberDatabase = new MemberDatabase();
    
      checkoutDatabase = new CheckoutDatabase(bookDatabase, memberDatabase);
    });
  
    it("updates checkout by id", function() {
      bookDatabase.create("Bible", "God", "123");
      bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
      bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
      bookDatabase.create("Diary", "Heinrich", "1");

      memberDatabase.create("Bob", "Builder");

      checkoutDatabase.create(1,0,"2020-09-14")
      checkoutDatabase.create(3,0,"2020-05-15")

      assert.deepEqual(checkoutDatabase.read(0), {bookId: 1, memberId: 0, period:"2020-09-14", id: 0});
      assert.deepEqual(checkoutDatabase.read(1), {bookId: 3, memberId: 0, period:"2020-05-15", id: 1});

      checkoutDatabase.update(4,0,"2020-09-14",0);
      assert.deepEqual(checkoutDatabase.read(0), {bookId: 4, memberId: 0, period:"2020-09-14", id: 0});

    });
  });
  
  
  describe("delete", function() {
    beforeEach(function() {
      bookDatabase = new BookDatabase();
      memberDatabase = new MemberDatabase();
    
      checkoutDatabase = new CheckoutDatabase(bookDatabase, memberDatabase);
    });
  
    it("deletes checkout by id", function() {
      bookDatabase.create("Bible", "God", "123");
      bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
      bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
      bookDatabase.create("Diary", "Heinrich", "1");

      memberDatabase.create("Bob", "Builder");

      checkoutDatabase.create(1,0,"2020-09-14")
      checkoutDatabase.create(3,0,"2020-05-15")

      assert.deepEqual(checkoutDatabase.read(0), {bookId: 1, memberId: 0, period:"2020-09-14", id: 0});
      assert.deepEqual(checkoutDatabase.read(1), {bookId: 3, memberId: 0, period:"2020-05-15", id: 1});

      checkoutDatabase.delete(1);

      assert.deepEqual(checkoutDatabase.read(1), undefined);
      assert.deepEqual(checkoutDatabase.checkouts.length, 1);
    });
  });

});