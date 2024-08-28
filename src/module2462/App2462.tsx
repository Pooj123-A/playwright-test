
import { test, expect } from "@playwright/experimental-ct-react";
import App2462 from "./App2462.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2462 />);
  await expect(component).toContainText("Learn React");
});
