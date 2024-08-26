
import { test, expect } from "@playwright/experimental-ct-react";
import App311 from "./App311.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App311 />);
  await expect(component).toContainText("Learn React");
});
