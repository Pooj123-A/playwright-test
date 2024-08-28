
import { test, expect } from "@playwright/experimental-ct-react";
import App898 from "./App898.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App898 />);
  await expect(component).toContainText("Learn React");
});
