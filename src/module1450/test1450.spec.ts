
import { test, expect } from "@playwright/experimental-ct-react";
import App1450 from "./App1450.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1450 />);
  await expect(component).toContainText("Learn React");
});
