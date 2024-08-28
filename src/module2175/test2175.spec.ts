
import { test, expect } from "@playwright/experimental-ct-react";
import App2175 from "./App2175.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2175 />);
  await expect(component).toContainText("Learn React");
});
