
import { test, expect } from "@playwright/experimental-ct-react";
import App752 from "./App752.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App752 />);
  await expect(component).toContainText("Learn React");
});
