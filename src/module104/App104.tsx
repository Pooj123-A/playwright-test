
import { test, expect } from "@playwright/experimental-ct-react";
import App104 from "./App104.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App104 />);
  await expect(component).toContainText("Learn React");
});
