
import { test, expect } from "@playwright/experimental-ct-react";
import App555 from "./App555.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App555 />);
  await expect(component).toContainText("Learn React");
});
