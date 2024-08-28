
import { test, expect } from "@playwright/experimental-ct-react";
import App439 from "./App439.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App439 />);
  await expect(component).toContainText("Learn React");
});
