
import { test, expect } from "@playwright/experimental-ct-react";
import App2128 from "./App2128.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2128 />);
  await expect(component).toContainText("Learn React");
});
