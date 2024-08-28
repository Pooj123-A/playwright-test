
import { test, expect } from "@playwright/experimental-ct-react";
import App1545 from "./App1545.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1545 />);
  await expect(component).toContainText("Learn React");
});
