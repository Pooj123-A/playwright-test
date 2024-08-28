
import { test, expect } from "@playwright/experimental-ct-react";
import App289 from "./App289.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App289 />);
  await expect(component).toContainText("Learn React");
});
