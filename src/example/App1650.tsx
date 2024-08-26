
import { test, expect } from "@playwright/experimental-ct-react";
import App1650 from "./App1650.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1650 />);
  await expect(component).toContainText("Learn React");
});
