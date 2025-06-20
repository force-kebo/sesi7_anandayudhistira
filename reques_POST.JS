const { expect } = require("chai");

describe("request post API reqres", () => {
    it("membuat user baru", async () => {
        const response = await fetch("https://reqres.in/api/users/10", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "sudir",
                job: "leader",
            }),
        });
        const data = await response.json();
        console.log(data);
        expect(response.status).to.equal(201);
        expect(data.name).to.include("sudir");
    });
})
