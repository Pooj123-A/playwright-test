
import { test, expect } from "@playwright/experimental-ct-react";
import App2073 from "./App2073.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2073 />);
  await expect(component).toContainText("Learn React");
});
