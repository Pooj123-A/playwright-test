
import { test, expect } from "@playwright/experimental-ct-react";
import App1397 from "./App1397.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1397 />);
  await expect(component).toContainText("Learn React");
});
