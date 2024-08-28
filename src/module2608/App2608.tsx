
import { test, expect } from "@playwright/experimental-ct-react";
import App2608 from "./App2608.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2608 />);
  await expect(component).toContainText("Learn React");
});
