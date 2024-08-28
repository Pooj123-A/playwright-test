
import { test, expect } from "@playwright/experimental-ct-react";
import App997 from "./App997.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App997 />);
  await expect(component).toContainText("Learn React");
});
