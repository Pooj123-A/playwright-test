
import { test, expect } from "@playwright/experimental-ct-react";
import App272 from "./App272.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App272 />);
  await expect(component).toContainText("Learn React");
});
