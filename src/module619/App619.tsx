
import { test, expect } from "@playwright/experimental-ct-react";
import App619 from "./App619.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App619 />);
  await expect(component).toContainText("Learn React");
});
