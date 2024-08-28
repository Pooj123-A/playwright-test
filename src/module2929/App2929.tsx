
import { test, expect } from "@playwright/experimental-ct-react";
import App2929 from "./App2929.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2929 />);
  await expect(component).toContainText("Learn React");
});
