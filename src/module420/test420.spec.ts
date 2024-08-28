
import { test, expect } from "@playwright/experimental-ct-react";
import App420 from "./App420.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App420 />);
  await expect(component).toContainText("Learn React");
});
