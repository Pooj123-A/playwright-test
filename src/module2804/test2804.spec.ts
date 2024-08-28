
import { test, expect } from "@playwright/experimental-ct-react";
import App2804 from "./App2804.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2804 />);
  await expect(component).toContainText("Learn React");
});
