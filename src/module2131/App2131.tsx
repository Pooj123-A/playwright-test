
import { test, expect } from "@playwright/experimental-ct-react";
import App2131 from "./App2131.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2131 />);
  await expect(component).toContainText("Learn React");
});
