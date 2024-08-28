
import { test, expect } from "@playwright/experimental-ct-react";
import App2880 from "./App2880.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2880 />);
  await expect(component).toContainText("Learn React");
});
