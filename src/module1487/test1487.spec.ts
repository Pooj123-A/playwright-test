
import { test, expect } from "@playwright/experimental-ct-react";
import App1487 from "./App1487.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1487 />);
  await expect(component).toContainText("Learn React");
});
