
import { test, expect } from "@playwright/experimental-ct-react";
import App1219 from "./App1219.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1219 />);
  await expect(component).toContainText("Learn React");
});
