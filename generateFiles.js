const fs = require("fs");
const path = require("path");

const generateFiles = (totalFiles) => {
  const exampleDir = path.join(__dirname, "example");
  const integrationTestDir = path.join(__dirname, "integration-test");

  // Create directories if they don't exist
  if (!fs.existsSync(exampleDir)) {
    fs.mkdirSync(exampleDir);
  }

  if (!fs.existsSync(integrationTestDir)) {
    fs.mkdirSync(integrationTestDir);
  }

  const appTemplate = (num) => `
import { test, expect } from "@playwright/experimental-ct-react";
import App${num} from "./App${num}.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App${num} />);
  await expect(component).toContainText("Learn React");
});
`;

  const testSpecTemplate = (num) => `
import { test, expect } from "@playwright/experimental-ct-react";
import App${num} from "../example/App${num}.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App${num} />);
  await expect(component).toContainText("Learn React");
});
`;

  for (let i = 1; i <= totalFiles; i++) {
    const appFilePath = path.join(exampleDir, `App${i}.tsx`);
    const testSpecFilePath = path.join(integrationTestDir, `test${i}.spec.tsx`);

    fs.writeFileSync(appFilePath, appTemplate(i), "utf8");
    fs.writeFileSync(testSpecFilePath, testSpecTemplate(i), "utf8");
  }

  console.log(
    `${totalFiles} files created in 'example' and 'integration-test' directories.`
  );
};

generateFiles(3000);
