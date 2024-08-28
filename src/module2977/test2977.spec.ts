
import { test, expect } from "@playwright/experimental-ct-react";
import App2977 from "./App2977.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2977 />);
  await expect(component).toContainText("Learn React");
});
