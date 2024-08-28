
import { test, expect } from "@playwright/experimental-ct-react";
import App2300 from "./App2300.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2300 />);
  await expect(component).toContainText("Learn React");
});
