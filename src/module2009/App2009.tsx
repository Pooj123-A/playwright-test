
import { test, expect } from "@playwright/experimental-ct-react";
import App2009 from "./App2009.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2009 />);
  await expect(component).toContainText("Learn React");
});
