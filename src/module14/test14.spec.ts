
import { test, expect } from "@playwright/experimental-ct-react";
import App14 from "./App14.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App14 />);
  await expect(component).toContainText("Learn React");
});
