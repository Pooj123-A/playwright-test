
import { test, expect } from "@playwright/experimental-ct-react";
import App2129 from "./App2129.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2129 />);
  await expect(component).toContainText("Learn React");
});
