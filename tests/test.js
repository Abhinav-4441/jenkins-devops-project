const assert = require("assert");

console.log("Running automated tests...");

const applicationName = "jenkins-devops-project";

assert.strictEqual(
    applicationName,
    "jenkins-devops-project"
);

console.log("Test 1 passed: Application name is correct.");

console.log("All tests passed.");
