
import { test, expect } from "@playwright/experimental-ct-react";
import App2008 from "./App2008.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2008 />);
  await expect(component).toContainText("Learn React");
});
