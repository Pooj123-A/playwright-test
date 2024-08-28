
import { test, expect } from "@playwright/experimental-ct-react";
import App2315 from "./App2315.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2315 />);
  await expect(component).toContainText("Learn React");
});
