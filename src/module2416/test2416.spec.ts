
import { test, expect } from "@playwright/experimental-ct-react";
import App2416 from "./App2416.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2416 />);
  await expect(component).toContainText("Learn React");
});
