
import { test, expect } from "@playwright/experimental-ct-react";
import App182 from "./App182.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App182 />);
  await expect(component).toContainText("Learn React");
});
