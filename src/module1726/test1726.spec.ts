
import { test, expect } from "@playwright/experimental-ct-react";
import App1726 from "./App1726.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1726 />);
  await expect(component).toContainText("Learn React");
});
