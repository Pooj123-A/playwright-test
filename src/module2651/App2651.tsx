
import { test, expect } from "@playwright/experimental-ct-react";
import App2651 from "./App2651.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2651 />);
  await expect(component).toContainText("Learn React");
});
