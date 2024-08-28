
import { test, expect } from "@playwright/experimental-ct-react";
import App265 from "./App265.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App265 />);
  await expect(component).toContainText("Learn React");
});
