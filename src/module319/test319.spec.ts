
import { test, expect } from "@playwright/experimental-ct-react";
import App319 from "./App319.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App319 />);
  await expect(component).toContainText("Learn React");
});
