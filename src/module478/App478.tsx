
import { test, expect } from "@playwright/experimental-ct-react";
import App478 from "./App478.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App478 />);
  await expect(component).toContainText("Learn React");
});
