
import { test, expect } from "@playwright/experimental-ct-react";
import App2901 from "./App2901.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2901 />);
  await expect(component).toContainText("Learn React");
});
