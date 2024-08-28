
import { test, expect } from "@playwright/experimental-ct-react";
import App2489 from "./App2489.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2489 />);
  await expect(component).toContainText("Learn React");
});
