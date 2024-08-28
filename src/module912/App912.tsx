
import { test, expect } from "@playwright/experimental-ct-react";
import App912 from "./App912.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App912 />);
  await expect(component).toContainText("Learn React");
});
