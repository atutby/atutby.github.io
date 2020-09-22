describe("getUsers", function() {

    it("gets users from GitHub", async function() {
      let users = await getUsers(['iliakan', 'remy', 'no.such.users', 'atutby']);
      assert.equal(users[0].login, 'iliakan');
      assert.equal(users[1].login, 'remy');
      assert.equal(users[2], null);
      assert.equal(users[3].login, 'atutby');
    });
  
  });