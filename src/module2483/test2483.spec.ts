
import { test, expect } from "@playwright/experimental-ct-react";
import App2483 from "./App2483.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2483 />);
  await expect(component).toContainText("Learn React");
});
