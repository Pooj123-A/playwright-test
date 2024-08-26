
import { test, expect } from "@playwright/experimental-ct-react";
import App1179 from "./App1179.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1179 />);
  await expect(component).toContainText("Learn React");
});
