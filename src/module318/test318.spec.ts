
import { test, expect } from "@playwright/experimental-ct-react";
import App318 from "./App318.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App318 />);
  await expect(component).toContainText("Learn React");
});
