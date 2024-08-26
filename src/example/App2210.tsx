
import { test, expect } from "@playwright/experimental-ct-react";
import App2210 from "./App2210.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2210 />);
  await expect(component).toContainText("Learn React");
});
