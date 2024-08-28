
import { test, expect } from "@playwright/experimental-ct-react";
import App1709 from "./App1709.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1709 />);
  await expect(component).toContainText("Learn React");
});
