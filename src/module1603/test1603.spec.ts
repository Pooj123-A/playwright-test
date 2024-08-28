
import { test, expect } from "@playwright/experimental-ct-react";
import App1603 from "./App1603.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1603 />);
  await expect(component).toContainText("Learn React");
});
