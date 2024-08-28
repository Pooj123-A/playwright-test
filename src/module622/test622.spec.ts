
import { test, expect } from "@playwright/experimental-ct-react";
import App622 from "./App622.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App622 />);
  await expect(component).toContainText("Learn React");
});
