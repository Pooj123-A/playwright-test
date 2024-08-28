
import { test, expect } from "@playwright/experimental-ct-react";
import App2549 from "./App2549.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2549 />);
  await expect(component).toContainText("Learn React");
});
