
import { test, expect } from "@playwright/experimental-ct-react";
import App2538 from "./App2538.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2538 />);
  await expect(component).toContainText("Learn React");
});
