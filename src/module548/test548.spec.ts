
import { test, expect } from "@playwright/experimental-ct-react";
import App548 from "./App548.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App548 />);
  await expect(component).toContainText("Learn React");
});
