
import { test, expect } from "@playwright/experimental-ct-react";
import App367 from "./App367.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App367 />);
  await expect(component).toContainText("Learn React");
});
