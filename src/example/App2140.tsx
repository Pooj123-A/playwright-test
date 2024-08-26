
import { test, expect } from "@playwright/experimental-ct-react";
import App2140 from "./App2140.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2140 />);
  await expect(component).toContainText("Learn React");
});
