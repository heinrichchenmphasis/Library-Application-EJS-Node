describe("Book Database Tests", function() {

describe("constructor", function() {
  beforeEach(function() {
    bookDatabase = new BookDatabase();
  });

  it("has an empty array of books", function() {
    assert.deepEqual(bookDatabase.books, []);
  });

  it("has a current id of 0", function() {
    assert.deepEqual(bookDatabase.currentId, 0);
  });
});

describe("create", function() {
  beforeEach(function() {
    bookDatabase = new BookDatabase();
  });

  it("adds a book with the given parameters", function() {
    bookDatabase.create("Bible", "God", "123");
    assert.deepEqual(bookDatabase.books[0], {title: "Bible", author: "God", bookReference: "123", id: 0});
  });

  it("updates the current id", function() {
    bookDatabase.create("Bible", "God", "123");
    assert.deepEqual(bookDatabase.currentId, 1);
  });

  it("adds books with updated ids", function() {
    bookDatabase.create("Bible", "God", "123");
    bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
    assert.deepEqual(bookDatabase.books[0].id, 0);
    assert.deepEqual(bookDatabase.books[1].id, 1);
  });
});

describe("read", function() {
  beforeEach(function() {
    bookDatabase = new BookDatabase();
  });

  it("gets book by id", function() {
    bookDatabase.create("Bible", "God", "123");
    bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
    bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
    bookDatabase.create("Diary", "Heinrich", "1");

    assert.deepEqual(bookDatabase.readById(0), {title: "Bible", author: "God", bookReference: "123", id: 0});
    assert.deepEqual(bookDatabase.readById(1), {title: "JavaScript Fundamentals", author: "Satan", bookReference: "93982", id: 1});
    assert.deepEqual(bookDatabase.readById(3), {title: "Diary", author: "Heinrich", bookReference: "1", id: 3});
  });

  it("gets book by reference", function() {
    bookDatabase.create("Bible", "God", "123");
    bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
    bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
    bookDatabase.create("Diary", "Heinrich", "1");

    assert.deepEqual(bookDatabase.readByReference("93982"), {title: "JavaScript Fundamentals", author: "Satan", bookReference: "93982", id: 1});
    assert.deepEqual(bookDatabase.readByReference("123"), {title: "Bible", author: "God", bookReference: "123", id: 0});
    assert.deepEqual(bookDatabase.readByReference("1"), {title: "Diary", author: "Heinrich", bookReference: "1", id: 3});
  });

});

describe("update", function() {
  beforeEach(function() {
    bookDatabase = new BookDatabase();
  });

  it("updates book by id", function() {
    bookDatabase.create("Bible", "God", "123");
    bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
    bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
    bookDatabase.create("Diary", "Heinrich", "1");

    assert.deepEqual(bookDatabase.readById(3), {title: "Diary", author: "Heinrich", bookReference: "1", id: 3});

    bookDatabase.update("Biography", "Heinrich", "1", 3);
    assert.deepEqual(bookDatabase.readById(3), {title: "Biography", author: "Heinrich", bookReference: "1", id: 3});

  });
});


describe("delete", function() {
  beforeEach(function() {
    bookDatabase = new BookDatabase();
  });

  it("deletes book by id", function() {
    bookDatabase.create("Bible", "God", "123");
    bookDatabase.create("JavaScript Fundamentals", "Satan", "93982");
    bookDatabase.create("Tom Sawyer", "MarkTwain", "1111");
    bookDatabase.create("Diary", "Heinrich", "1");

    bookDatabase.delete(3);

    assert.deepEqual(bookDatabase.readById(3), undefined);
    assert.deepEqual(bookDatabase.books.length, 3);
  });
});

});