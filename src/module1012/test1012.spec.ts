
import { test, expect } from "@playwright/experimental-ct-react";
import App1012 from "./App1012.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1012 />);
  await expect(component).toContainText("Learn React");
});
