
import { test, expect } from "@playwright/experimental-ct-react";
import App210 from "./App210.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App210 />);
  await expect(component).toContainText("Learn React");
});
