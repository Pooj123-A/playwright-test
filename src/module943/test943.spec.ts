
import { test, expect } from "@playwright/experimental-ct-react";
import App943 from "./App943.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App943 />);
  await expect(component).toContainText("Learn React");
});
