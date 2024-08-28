
import { test, expect } from "@playwright/experimental-ct-react";
import App2119 from "./App2119.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2119 />);
  await expect(component).toContainText("Learn React");
});
