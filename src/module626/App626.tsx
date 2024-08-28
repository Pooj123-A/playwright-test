
import { test, expect } from "@playwright/experimental-ct-react";
import App626 from "./App626.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App626 />);
  await expect(component).toContainText("Learn React");
});
