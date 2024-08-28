
import { test, expect } from "@playwright/experimental-ct-react";
import App2698 from "./App2698.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2698 />);
  await expect(component).toContainText("Learn React");
});
