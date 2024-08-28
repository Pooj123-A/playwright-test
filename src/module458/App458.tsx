
import { test, expect } from "@playwright/experimental-ct-react";
import App458 from "./App458.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App458 />);
  await expect(component).toContainText("Learn React");
});
