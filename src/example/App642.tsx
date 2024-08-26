
import { test, expect } from "@playwright/experimental-ct-react";
import App642 from "./App642.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App642 />);
  await expect(component).toContainText("Learn React");
});
