
import { test, expect } from "@playwright/experimental-ct-react";
import App2042 from "./App2042.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2042 />);
  await expect(component).toContainText("Learn React");
});
