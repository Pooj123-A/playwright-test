
import { test, expect } from "@playwright/experimental-ct-react";
import App76 from "./App76.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App76 />);
  await expect(component).toContainText("Learn React");
});
