
import { test, expect } from "@playwright/experimental-ct-react";
import App1751 from "./App1751.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1751 />);
  await expect(component).toContainText("Learn React");
});
