
import { test, expect } from "@playwright/experimental-ct-react";
import App2388 from "./App2388.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2388 />);
  await expect(component).toContainText("Learn React");
});
