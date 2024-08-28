
import { test, expect } from "@playwright/experimental-ct-react";
import App337 from "./App337.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App337 />);
  await expect(component).toContainText("Learn React");
});
