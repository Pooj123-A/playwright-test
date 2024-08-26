
import { test, expect } from "@playwright/experimental-ct-react";
import App2592 from "./App2592.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2592 />);
  await expect(component).toContainText("Learn React");
});
