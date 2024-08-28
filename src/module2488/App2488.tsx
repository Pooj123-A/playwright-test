
import { test, expect } from "@playwright/experimental-ct-react";
import App2488 from "./App2488.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2488 />);
  await expect(component).toContainText("Learn React");
});
