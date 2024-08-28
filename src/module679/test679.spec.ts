
import { test, expect } from "@playwright/experimental-ct-react";
import App679 from "./App679.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App679 />);
  await expect(component).toContainText("Learn React");
});
