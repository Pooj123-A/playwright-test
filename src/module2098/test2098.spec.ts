
import { test, expect } from "@playwright/experimental-ct-react";
import App2098 from "./App2098.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2098 />);
  await expect(component).toContainText("Learn React");
});
