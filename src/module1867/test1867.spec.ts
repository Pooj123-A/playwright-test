
import { test, expect } from "@playwright/experimental-ct-react";
import App1867 from "./App1867.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1867 />);
  await expect(component).toContainText("Learn React");
});
