
import { test, expect } from "@playwright/experimental-ct-react";
import App2275 from "./App2275.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2275 />);
  await expect(component).toContainText("Learn React");
});
