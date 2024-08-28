
import { test, expect } from "@playwright/experimental-ct-react";
import App2427 from "./App2427.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2427 />);
  await expect(component).toContainText("Learn React");
});
