const { expect } = require("chai");

describe("request Patch API reqres", () => {
    it("Delete successful", async () => {
        const response = await fetch("https://reqres.in/api/users/10", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });
        expect(response.status).to.equal(204);
    });
})