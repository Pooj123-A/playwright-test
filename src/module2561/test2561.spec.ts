
import { test, expect } from "@playwright/experimental-ct-react";
import App2561 from "./App2561.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2561 />);
  await expect(component).toContainText("Learn React");
});
