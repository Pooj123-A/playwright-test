
import { test, expect } from "@playwright/experimental-ct-react";
import App61 from "./App61.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App61 />);
  await expect(component).toContainText("Learn React");
});
