
import { test, expect } from "@playwright/experimental-ct-react";
import App2341 from "./App2341.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2341 />);
  await expect(component).toContainText("Learn React");
});
