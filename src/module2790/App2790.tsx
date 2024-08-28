
import { test, expect } from "@playwright/experimental-ct-react";
import App2790 from "./App2790.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2790 />);
  await expect(component).toContainText("Learn React");
});
