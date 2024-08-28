
import { test, expect } from "@playwright/experimental-ct-react";
import App1839 from "./App1839.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1839 />);
  await expect(component).toContainText("Learn React");
});
