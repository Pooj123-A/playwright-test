
import { test, expect } from "@playwright/experimental-ct-react";
import App2897 from "./App2897.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2897 />);
  await expect(component).toContainText("Learn React");
});
