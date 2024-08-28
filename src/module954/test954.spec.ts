
import { test, expect } from "@playwright/experimental-ct-react";
import App954 from "./App954.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App954 />);
  await expect(component).toContainText("Learn React");
});
