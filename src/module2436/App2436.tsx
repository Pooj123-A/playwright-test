
import { test, expect } from "@playwright/experimental-ct-react";
import App2436 from "./App2436.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2436 />);
  await expect(component).toContainText("Learn React");
});
