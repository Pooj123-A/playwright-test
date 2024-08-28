
import { test, expect } from "@playwright/experimental-ct-react";
import App573 from "./App573.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App573 />);
  await expect(component).toContainText("Learn React");
});
