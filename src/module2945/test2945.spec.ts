
import { test, expect } from "@playwright/experimental-ct-react";
import App2945 from "./App2945.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2945 />);
  await expect(component).toContainText("Learn React");
});
