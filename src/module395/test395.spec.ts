
import { test, expect } from "@playwright/experimental-ct-react";
import App395 from "./App395.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App395 />);
  await expect(component).toContainText("Learn React");
});
