describe("Member Database Tests", function() {

  describe("constructor", function() {
    beforeEach(function() {
      memberDatabase = new MemberDatabase();
    });
  
    it("has an empty array of members", function() {
      assert.deepEqual(memberDatabase.members, []);
    });
  
    it("has a current id of 0", function() {
      assert.deepEqual(memberDatabase.currentId, 0);
    });
  });
  
  describe("create", function() {
      beforeEach(function() {
        memberDatabase = new MemberDatabase();
      });
    
      it("adds a member with the given parameters", function() {
        memberDatabase.create("Bob", "Builder");
        assert.deepEqual(memberDatabase.members[0], {firstName: "Bob", lastName: "Builder", id: 0});
      });
    
      it("updates the current id", function() {
        memberDatabase.create("Bob", "Builder");
        assert.deepEqual(memberDatabase.currentId, 1);
      });
    
      it("adds members with updated ids", function() {
        memberDatabase.create("Bob", "Builder");
        memberDatabase.create("Heinrich", "Chen");
        assert.deepEqual(memberDatabase.members[0].id, 0);
        assert.deepEqual(memberDatabase.members[1].id, 1);
      });
  });
    
  describe("read", function() {
      beforeEach(function() {
        memberDatabase = new MemberDatabase();
      });
    
      it("gets member by id", function() {
        memberDatabase.create("Bob", "Builder");
        memberDatabase.create("Heinrich", "Chen");
        memberDatabase.create("Ayla", "Mao");
        memberDatabase.create("John", "Smith");
    
        assert.deepEqual(memberDatabase.read(0), {firstName: "Bob", lastName: "Builder", id: 0});
        assert.deepEqual(memberDatabase.read(1), {firstName: "Heinrich", lastName: "Chen", id: 1});
        assert.deepEqual(memberDatabase.read(3), {firstName: "John", lastName: "Smith", id: 3});
      });
  });


  describe("update", function() {
    beforeEach(function() {
      memberDatabase = new MemberDatabase();
    });

    it("updates member by id", function() {
      memberDatabase.create("Bob", "Builder");
      memberDatabase.create("Heinrich", "Chen");
      memberDatabase.create("Ayla", "Mao");
      memberDatabase.create("John", "Smith");

      assert.deepEqual(memberDatabase.read(1), {firstName: "Heinrich", lastName: "Chen", id: 1});

      memberDatabase.update("Friedrich", "Chen", 1);
      assert.deepEqual(memberDatabase.read(1), {firstName: "Friedrich", lastName: "Chen", id: 1});

    });
  });


  describe("delete", function() {
    beforeEach(function() {
      memberDatabase = new MemberDatabase();
    });

    it("deletes member by id", function() {
      memberDatabase.create("Bob", "Builder");
      memberDatabase.create("Heinrich", "Chen");
      memberDatabase.create("Ayla", "Mao");
      memberDatabase.create("John", "Smith");

      memberDatabase.delete(3);

      assert.deepEqual(memberDatabase.read(3), undefined);
      assert.deepEqual(memberDatabase.members.length, 3);
    });
  });


});

