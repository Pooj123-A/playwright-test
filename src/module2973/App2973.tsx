
import { test, expect } from "@playwright/experimental-ct-react";
import App2973 from "./App2973.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2973 />);
  await expect(component).toContainText("Learn React");
});
