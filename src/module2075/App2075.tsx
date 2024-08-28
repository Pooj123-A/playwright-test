
import { test, expect } from "@playwright/experimental-ct-react";
import App2075 from "./App2075.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2075 />);
  await expect(component).toContainText("Learn React");
});
