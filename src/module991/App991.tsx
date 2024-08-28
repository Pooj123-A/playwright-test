
import { test, expect } from "@playwright/experimental-ct-react";
import App991 from "./App991.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App991 />);
  await expect(component).toContainText("Learn React");
});
