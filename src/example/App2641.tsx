
import { test, expect } from "@playwright/experimental-ct-react";
import App2641 from "./App2641.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2641 />);
  await expect(component).toContainText("Learn React");
});
