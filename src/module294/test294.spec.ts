
import { test, expect } from "@playwright/experimental-ct-react";
import App294 from "./App294.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App294 />);
  await expect(component).toContainText("Learn React");
});
