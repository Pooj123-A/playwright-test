
import { test, expect } from "@playwright/experimental-ct-react";
import App434 from "./App434.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App434 />);
  await expect(component).toContainText("Learn React");
});
