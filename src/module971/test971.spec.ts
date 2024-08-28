
import { test, expect } from "@playwright/experimental-ct-react";
import App971 from "./App971.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App971 />);
  await expect(component).toContainText("Learn React");
});
