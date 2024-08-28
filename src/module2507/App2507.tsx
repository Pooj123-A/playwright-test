
import { test, expect } from "@playwright/experimental-ct-react";
import App2507 from "./App2507.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2507 />);
  await expect(component).toContainText("Learn React");
});
