
import { test, expect } from "@playwright/experimental-ct-react";
import App2100 from "./App2100.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2100 />);
  await expect(component).toContainText("Learn React");
});
