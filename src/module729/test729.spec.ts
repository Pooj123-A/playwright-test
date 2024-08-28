
import { test, expect } from "@playwright/experimental-ct-react";
import App729 from "./App729.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App729 />);
  await expect(component).toContainText("Learn React");
});
