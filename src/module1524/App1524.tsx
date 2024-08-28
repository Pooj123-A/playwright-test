
import { test, expect } from "@playwright/experimental-ct-react";
import App1524 from "./App1524.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1524 />);
  await expect(component).toContainText("Learn React");
});
