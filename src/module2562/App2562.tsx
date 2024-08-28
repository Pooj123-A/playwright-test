
import { test, expect } from "@playwright/experimental-ct-react";
import App2562 from "./App2562.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2562 />);
  await expect(component).toContainText("Learn React");
});
