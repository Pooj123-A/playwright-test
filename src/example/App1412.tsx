
import { test, expect } from "@playwright/experimental-ct-react";
import App1412 from "./App1412.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1412 />);
  await expect(component).toContainText("Learn React");
});
