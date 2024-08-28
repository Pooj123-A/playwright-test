
import { test, expect } from "@playwright/experimental-ct-react";
import App2992 from "./App2992.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2992 />);
  await expect(component).toContainText("Learn React");
});
