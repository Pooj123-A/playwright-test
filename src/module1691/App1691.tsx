
import { test, expect } from "@playwright/experimental-ct-react";
import App1691 from "./App1691.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1691 />);
  await expect(component).toContainText("Learn React");
});
