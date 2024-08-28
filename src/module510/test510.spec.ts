
import { test, expect } from "@playwright/experimental-ct-react";
import App510 from "./App510.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App510 />);
  await expect(component).toContainText("Learn React");
});
