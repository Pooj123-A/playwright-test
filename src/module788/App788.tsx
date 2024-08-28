
import { test, expect } from "@playwright/experimental-ct-react";
import App788 from "./App788.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App788 />);
  await expect(component).toContainText("Learn React");
});
