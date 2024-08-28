
import { test, expect } from "@playwright/experimental-ct-react";
import App1032 from "./App1032.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1032 />);
  await expect(component).toContainText("Learn React");
});
