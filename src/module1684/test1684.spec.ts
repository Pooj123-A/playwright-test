
import { test, expect } from "@playwright/experimental-ct-react";
import App1684 from "./App1684.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1684 />);
  await expect(component).toContainText("Learn React");
});
