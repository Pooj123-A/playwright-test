
import { test, expect } from "@playwright/experimental-ct-react";
import App808 from "./App808.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App808 />);
  await expect(component).toContainText("Learn React");
});
