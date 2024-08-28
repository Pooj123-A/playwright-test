
import { test, expect } from "@playwright/experimental-ct-react";
import App2157 from "./App2157.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2157 />);
  await expect(component).toContainText("Learn React");
});
