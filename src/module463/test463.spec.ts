
import { test, expect } from "@playwright/experimental-ct-react";
import App463 from "./App463.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App463 />);
  await expect(component).toContainText("Learn React");
});
