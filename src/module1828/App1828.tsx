
import { test, expect } from "@playwright/experimental-ct-react";
import App1828 from "./App1828.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1828 />);
  await expect(component).toContainText("Learn React");
});
