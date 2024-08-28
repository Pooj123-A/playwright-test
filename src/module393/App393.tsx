
import { test, expect } from "@playwright/experimental-ct-react";
import App393 from "./App393.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App393 />);
  await expect(component).toContainText("Learn React");
});
