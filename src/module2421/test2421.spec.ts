
import { test, expect } from "@playwright/experimental-ct-react";
import App2421 from "./App2421.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2421 />);
  await expect(component).toContainText("Learn React");
});
