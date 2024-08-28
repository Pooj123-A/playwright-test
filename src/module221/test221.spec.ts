
import { test, expect } from "@playwright/experimental-ct-react";
import App221 from "./App221.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App221 />);
  await expect(component).toContainText("Learn React");
});
