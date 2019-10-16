var request = require("request");
var base_url = "http://localhost:3090";

// GET
describe("get/", function() {
  it("should return an array of 4", function() {
    request.get(`${base_url}/users`, function(req, res, body) {
      expect(body.length).toBe(4);
    });
  });
  it("should be an array of objects", function() {
    request.get(`${base_url}/users`, function(req, res, body) {
      expect(body).toEqual([]);
    });
  });
  it("Status 200", () => {
    request.get(`${base_url}/users`, function(req, res, body) {
      expect(body.status).toBe(200);
    });
  });

  // it("uses the correct method", function(done) {
  //   request.get(`${base_url}/users`, function(req, res, body) {
  //   expect(body.method.toBe('get'));
  //   })
  // });
});

// POST
describe("post/", function() {
  it("should return an array of 5", function() {
    request.get(`${base_url}/users`, function(req, res, body) {
      // console.log(body);
      expect(body.length).toBe(5);
    });
  });
  it("should be an array of objects", function() {
    request.get(`${base_url}/users`, function(req, res, body) {
      expect(body).toEqual([]);
    });
  });
  it("Status 200", () => {
    request.get(`${base_url}/users`, function(req, res, body) {
      expect(body.status).toBe(200);
    });
  });
});

// PUT
describe("put/", function() {
  it("should return an array of 4", function() {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      // console.log(body);
      expect(body.length).toBe(4);
    });
  });
  it("should be an array of objects", function() {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body).toEqual([]);
    });
  });
  it("Status 200", () => {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body.status).toBe(200);
    });
  });
});

// DELETE
describe("delete/:id", function() {
  it("should return an array of 3", function() {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body.length).toBe(3);
    });
  });
  it("should be an array of objects", function() {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body).toEqual([]);
    });
  });
  it("Status 200", () => {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body.status).toBe(200);
    });
  });
});

// GET/:id
describe("get/:id", function() {
  it("should return an array of 1", function() {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body.length).toBe(1);
    });
  });
  it("should return an array of objects", function() {
    request.get(`${base_url}/users/id`, function(req, res, body) {
      expect(body).toEqual([]);
    });
  });
  it("Status 200", () => {
    request.get(`${base_url}/users/:id`, function(req, res, body) {
      expect(body.status).toBe(200);
    });
  });
});
