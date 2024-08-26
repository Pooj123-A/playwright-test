
import { test, expect } from "@playwright/experimental-ct-react";
import App1150 from "./App1150.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1150 />);
  await expect(component).toContainText("Learn React");
});
