
import { test, expect } from "@playwright/experimental-ct-react";
import App2840 from "./App2840.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2840 />);
  await expect(component).toContainText("Learn React");
});
