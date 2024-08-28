
import { test, expect } from "@playwright/experimental-ct-react";
import App198 from "./App198.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App198 />);
  await expect(component).toContainText("Learn React");
});
