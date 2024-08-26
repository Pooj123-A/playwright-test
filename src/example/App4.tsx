
import { test, expect } from "@playwright/experimental-ct-react";
import App4 from "./App4.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App4 />);
  await expect(component).toContainText("Learn React");
});
