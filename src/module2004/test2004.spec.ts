
import { test, expect } from "@playwright/experimental-ct-react";
import App2004 from "./App2004.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2004 />);
  await expect(component).toContainText("Learn React");
});
