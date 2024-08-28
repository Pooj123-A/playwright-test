
import { test, expect } from "@playwright/experimental-ct-react";
import App852 from "./App852.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App852 />);
  await expect(component).toContainText("Learn React");
});
