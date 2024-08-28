
import { test, expect } from "@playwright/experimental-ct-react";
import App2581 from "./App2581.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2581 />);
  await expect(component).toContainText("Learn React");
});
