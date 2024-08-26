
import { test, expect } from "@playwright/experimental-ct-react";
import App512 from "./App512.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App512 />);
  await expect(component).toContainText("Learn React");
});
