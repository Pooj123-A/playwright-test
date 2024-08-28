
import { test, expect } from "@playwright/experimental-ct-react";
import App418 from "./App418.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App418 />);
  await expect(component).toContainText("Learn React");
});
