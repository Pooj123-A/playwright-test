
import { test, expect } from "@playwright/experimental-ct-react";
import App2063 from "./App2063.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2063 />);
  await expect(component).toContainText("Learn React");
});
