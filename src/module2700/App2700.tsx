
import { test, expect } from "@playwright/experimental-ct-react";
import App2700 from "./App2700.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2700 />);
  await expect(component).toContainText("Learn React");
});
