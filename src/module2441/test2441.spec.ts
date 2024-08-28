
import { test, expect } from "@playwright/experimental-ct-react";
import App2441 from "./App2441.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2441 />);
  await expect(component).toContainText("Learn React");
});
