
import { test, expect } from "@playwright/experimental-ct-react";
import App2370 from "./App2370.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2370 />);
  await expect(component).toContainText("Learn React");
});
