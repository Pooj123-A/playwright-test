
import { test, expect } from "@playwright/experimental-ct-react";
import App893 from "./App893.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App893 />);
  await expect(component).toContainText("Learn React");
});
