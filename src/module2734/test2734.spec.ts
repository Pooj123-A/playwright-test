
import { test, expect } from "@playwright/experimental-ct-react";
import App2734 from "./App2734.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2734 />);
  await expect(component).toContainText("Learn React");
});
