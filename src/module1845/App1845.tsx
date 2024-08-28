
import { test, expect } from "@playwright/experimental-ct-react";
import App1845 from "./App1845.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1845 />);
  await expect(component).toContainText("Learn React");
});
