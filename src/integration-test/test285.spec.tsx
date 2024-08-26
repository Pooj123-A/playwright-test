
import { test, expect } from "@playwright/experimental-ct-react";
import App285 from "../example/App285.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App285 />);
  await expect(component).toContainText("Learn React");
});
