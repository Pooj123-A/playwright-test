
import { test, expect } from "@playwright/experimental-ct-react";
import App840 from "./App840.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App840 />);
  await expect(component).toContainText("Learn React");
});
