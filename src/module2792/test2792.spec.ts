
import { test, expect } from "@playwright/experimental-ct-react";
import App2792 from "./App2792.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2792 />);
  await expect(component).toContainText("Learn React");
});
