
import { test, expect } from "@playwright/experimental-ct-react";
import App2998 from "./App2998.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2998 />);
  await expect(component).toContainText("Learn React");
});
