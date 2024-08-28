
import { test, expect } from "@playwright/experimental-ct-react";
import App673 from "./App673.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App673 />);
  await expect(component).toContainText("Learn React");
});
