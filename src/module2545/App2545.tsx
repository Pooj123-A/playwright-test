
import { test, expect } from "@playwright/experimental-ct-react";
import App2545 from "./App2545.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2545 />);
  await expect(component).toContainText("Learn React");
});
