
import { test, expect } from "@playwright/experimental-ct-react";
import App1647 from "./App1647.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1647 />);
  await expect(component).toContainText("Learn React");
});
