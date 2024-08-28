
import { test, expect } from "@playwright/experimental-ct-react";
import App2447 from "./App2447.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2447 />);
  await expect(component).toContainText("Learn React");
});
