
import { test, expect } from "@playwright/experimental-ct-react";
import App2318 from "./App2318.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2318 />);
  await expect(component).toContainText("Learn React");
});
