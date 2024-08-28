
import { test, expect } from "@playwright/experimental-ct-react";
import App1812 from "./App1812.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1812 />);
  await expect(component).toContainText("Learn React");
});
