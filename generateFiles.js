const fs = require("fs");
const path = require("path");

const generateModuleFiles = (totalModules) => {
  const srcDir = path.join(__dirname, "src");

  // Create the src directory if it doesn't exist
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
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
import App${num} from "./App${num}.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App${num} />);
  await expect(component).toContainText("Learn React");
});
`;

  for (let i = 1; i <= totalModules; i++) {
    const moduleDir = path.join(srcDir, `module${i}`);

    // Create module directory
    if (!fs.existsSync(moduleDir)) {
      fs.mkdirSync(moduleDir);
    }

    const appFilePath = path.join(moduleDir, `App${i}.tsx`);
    const testSpecFilePath = path.join(moduleDir, `test${i}.spec.ts`);

    // Write the App and test spec files
    fs.writeFileSync(appFilePath, appTemplate(i), "utf8");
    fs.writeFileSync(testSpecFilePath, testSpecTemplate(i), "utf8");
  }

  console.log(
    `${totalModules} module directories created in 'src/', each with App.tsx and test.spec.ts files.`
  );
};

generateModuleFiles(3000);
