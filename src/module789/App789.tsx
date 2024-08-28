
import { test, expect } from "@playwright/experimental-ct-react";
import App789 from "./App789.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App789 />);
  await expect(component).toContainText("Learn React");
});
