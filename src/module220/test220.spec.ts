
import { test, expect } from "@playwright/experimental-ct-react";
import App220 from "./App220.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App220 />);
  await expect(component).toContainText("Learn React");
});
