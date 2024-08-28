
import { test, expect } from "@playwright/experimental-ct-react";
import App2147 from "./App2147.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2147 />);
  await expect(component).toContainText("Learn React");
});
