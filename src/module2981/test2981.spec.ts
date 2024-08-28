
import { test, expect } from "@playwright/experimental-ct-react";
import App2981 from "./App2981.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2981 />);
  await expect(component).toContainText("Learn React");
});
