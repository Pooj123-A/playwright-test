
import { test, expect } from "@playwright/experimental-ct-react";
import App270 from "./App270.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App270 />);
  await expect(component).toContainText("Learn React");
});
