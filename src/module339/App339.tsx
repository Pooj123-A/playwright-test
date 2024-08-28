
import { test, expect } from "@playwright/experimental-ct-react";
import App339 from "./App339.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App339 />);
  await expect(component).toContainText("Learn React");
});
