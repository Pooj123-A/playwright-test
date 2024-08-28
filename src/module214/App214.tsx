
import { test, expect } from "@playwright/experimental-ct-react";
import App214 from "./App214.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App214 />);
  await expect(component).toContainText("Learn React");
});
