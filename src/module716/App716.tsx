
import { test, expect } from "@playwright/experimental-ct-react";
import App716 from "./App716.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App716 />);
  await expect(component).toContainText("Learn React");
});
