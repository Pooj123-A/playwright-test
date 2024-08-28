
import { test, expect } from "@playwright/experimental-ct-react";
import App2380 from "./App2380.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2380 />);
  await expect(component).toContainText("Learn React");
});
