
import { test, expect } from "@playwright/experimental-ct-react";
import App2669 from "./App2669.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2669 />);
  await expect(component).toContainText("Learn React");
});
