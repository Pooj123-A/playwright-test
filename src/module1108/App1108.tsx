
import { test, expect } from "@playwright/experimental-ct-react";
import App1108 from "./App1108.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1108 />);
  await expect(component).toContainText("Learn React");
});
