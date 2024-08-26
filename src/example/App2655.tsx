
import { test, expect } from "@playwright/experimental-ct-react";
import App2655 from "./App2655.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2655 />);
  await expect(component).toContainText("Learn React");
});
