
import { test, expect } from "@playwright/experimental-ct-react";
import App2751 from "./App2751.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2751 />);
  await expect(component).toContainText("Learn React");
});
