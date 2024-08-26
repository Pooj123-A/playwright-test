
import { test, expect } from "@playwright/experimental-ct-react";
import App461 from "./App461.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App461 />);
  await expect(component).toContainText("Learn React");
});
