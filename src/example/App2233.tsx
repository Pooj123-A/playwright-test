
import { test, expect } from "@playwright/experimental-ct-react";
import App2233 from "./App2233.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2233 />);
  await expect(component).toContainText("Learn React");
});
