
import { test, expect } from "@playwright/experimental-ct-react";
import App211 from "./App211.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App211 />);
  await expect(component).toContainText("Learn React");
});
