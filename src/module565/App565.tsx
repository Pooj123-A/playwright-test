
import { test, expect } from "@playwright/experimental-ct-react";
import App565 from "./App565.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App565 />);
  await expect(component).toContainText("Learn React");
});
