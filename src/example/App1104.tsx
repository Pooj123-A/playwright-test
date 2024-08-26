
import { test, expect } from "@playwright/experimental-ct-react";
import App1104 from "./App1104.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1104 />);
  await expect(component).toContainText("Learn React");
});
