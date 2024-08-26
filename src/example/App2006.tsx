
import { test, expect } from "@playwright/experimental-ct-react";
import App2006 from "./App2006.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2006 />);
  await expect(component).toContainText("Learn React");
});
