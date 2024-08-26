
import { test, expect } from "@playwright/experimental-ct-react";
import App74 from "./App74.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App74 />);
  await expect(component).toContainText("Learn React");
});
