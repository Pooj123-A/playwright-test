
import { test, expect } from "@playwright/experimental-ct-react";
import App2066 from "./App2066.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2066 />);
  await expect(component).toContainText("Learn React");
});
