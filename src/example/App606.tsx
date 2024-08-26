
import { test, expect } from "@playwright/experimental-ct-react";
import App606 from "./App606.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App606 />);
  await expect(component).toContainText("Learn React");
});
