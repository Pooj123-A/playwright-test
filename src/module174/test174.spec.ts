
import { test, expect } from "@playwright/experimental-ct-react";
import App174 from "./App174.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App174 />);
  await expect(component).toContainText("Learn React");
});
