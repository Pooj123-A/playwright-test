
import { test, expect } from "@playwright/experimental-ct-react";
import App1479 from "./App1479.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1479 />);
  await expect(component).toContainText("Learn React");
});
