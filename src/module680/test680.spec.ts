
import { test, expect } from "@playwright/experimental-ct-react";
import App680 from "./App680.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App680 />);
  await expect(component).toContainText("Learn React");
});
