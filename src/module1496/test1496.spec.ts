
import { test, expect } from "@playwright/experimental-ct-react";
import App1496 from "./App1496.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1496 />);
  await expect(component).toContainText("Learn React");
});
