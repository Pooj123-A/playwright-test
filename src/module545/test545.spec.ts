
import { test, expect } from "@playwright/experimental-ct-react";
import App545 from "./App545.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App545 />);
  await expect(component).toContainText("Learn React");
});
