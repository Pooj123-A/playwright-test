
import { test, expect } from "@playwright/experimental-ct-react";
import App2688 from "./App2688.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2688 />);
  await expect(component).toContainText("Learn React");
});
