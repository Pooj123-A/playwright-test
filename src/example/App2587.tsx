
import { test, expect } from "@playwright/experimental-ct-react";
import App2587 from "./App2587.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2587 />);
  await expect(component).toContainText("Learn React");
});
