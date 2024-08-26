
import { test, expect } from "@playwright/experimental-ct-react";
import App904 from "./App904.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App904 />);
  await expect(component).toContainText("Learn React");
});
