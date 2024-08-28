
import { test, expect } from "@playwright/experimental-ct-react";
import App2316 from "./App2316.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2316 />);
  await expect(component).toContainText("Learn React");
});
