
import { test, expect } from "@playwright/experimental-ct-react";
import App88 from "./App88.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App88 />);
  await expect(component).toContainText("Learn React");
});
