
import { test, expect } from "@playwright/experimental-ct-react";
import App2239 from "./App2239.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2239 />);
  await expect(component).toContainText("Learn React");
});
