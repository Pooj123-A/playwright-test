
import { test, expect } from "@playwright/experimental-ct-react";
import App2015 from "./App2015.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2015 />);
  await expect(component).toContainText("Learn React");
});
