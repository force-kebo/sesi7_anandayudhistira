const { expect } = require("chai");

describe("request Patch API reqres", () => {
    it("update user", async () => {
        const response = await fetch("https://reqres.in/api/users/10", {
            method: "PATCH",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "sudir",
                job: "Senior Dev",
            }),
        });
        const data = await response.json();
        console.log(data);
        expect(response.status).to.equal(200);
        expect(data.name).to.include("sudir");
    });
})
