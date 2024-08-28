
import { test, expect } from "@playwright/experimental-ct-react";
import App923 from "./App923.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App923 />);
  await expect(component).toContainText("Learn React");
});
