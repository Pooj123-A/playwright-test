
import { test, expect } from "@playwright/experimental-ct-react";
import App549 from "./App549.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App549 />);
  await expect(component).toContainText("Learn React");
});
