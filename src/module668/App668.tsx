
import { test, expect } from "@playwright/experimental-ct-react";
import App668 from "./App668.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App668 />);
  await expect(component).toContainText("Learn React");
});
