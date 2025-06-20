const assert = require("assert");

describe("List", function () {

    it("get list", async function () {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        assert.strictEqual(response.status, 200);
        console.log(data);
    });
});