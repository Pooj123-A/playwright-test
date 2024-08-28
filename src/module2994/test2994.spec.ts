
import { test, expect } from "@playwright/experimental-ct-react";
import App2994 from "./App2994.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2994 />);
  await expect(component).toContainText("Learn React");
});
