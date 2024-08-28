
import { test, expect } from "@playwright/experimental-ct-react";
import App2816 from "./App2816.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2816 />);
  await expect(component).toContainText("Learn React");
});
