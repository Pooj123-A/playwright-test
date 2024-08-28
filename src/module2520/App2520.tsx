
import { test, expect } from "@playwright/experimental-ct-react";
import App2520 from "./App2520.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2520 />);
  await expect(component).toContainText("Learn React");
});
