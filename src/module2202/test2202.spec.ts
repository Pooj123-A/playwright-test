
import { test, expect } from "@playwright/experimental-ct-react";
import App2202 from "./App2202.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2202 />);
  await expect(component).toContainText("Learn React");
});
