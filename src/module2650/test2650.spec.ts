
import { test, expect } from "@playwright/experimental-ct-react";
import App2650 from "./App2650.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2650 />);
  await expect(component).toContainText("Learn React");
});
