
import { test, expect } from "@playwright/experimental-ct-react";
import App2005 from "./App2005.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2005 />);
  await expect(component).toContainText("Learn React");
});
