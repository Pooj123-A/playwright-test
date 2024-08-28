
import { test, expect } from "@playwright/experimental-ct-react";
import App457 from "./App457.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App457 />);
  await expect(component).toContainText("Learn React");
});
