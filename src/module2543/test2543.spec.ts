
import { test, expect } from "@playwright/experimental-ct-react";
import App2543 from "./App2543.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2543 />);
  await expect(component).toContainText("Learn React");
});
