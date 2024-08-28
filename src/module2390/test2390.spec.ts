
import { test, expect } from "@playwright/experimental-ct-react";
import App2390 from "./App2390.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2390 />);
  await expect(component).toContainText("Learn React");
});
