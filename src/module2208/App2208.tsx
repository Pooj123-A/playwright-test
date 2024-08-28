
import { test, expect } from "@playwright/experimental-ct-react";
import App2208 from "./App2208.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2208 />);
  await expect(component).toContainText("Learn React");
});
