
import { test, expect } from "@playwright/experimental-ct-react";
import App2308 from "./App2308.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2308 />);
  await expect(component).toContainText("Learn React");
});
