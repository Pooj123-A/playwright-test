
import { test, expect } from "@playwright/experimental-ct-react";
import App2740 from "./App2740.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2740 />);
  await expect(component).toContainText("Learn React");
});
