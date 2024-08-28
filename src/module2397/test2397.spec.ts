
import { test, expect } from "@playwright/experimental-ct-react";
import App2397 from "./App2397.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2397 />);
  await expect(component).toContainText("Learn React");
});
