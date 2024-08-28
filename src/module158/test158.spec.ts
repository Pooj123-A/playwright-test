
import { test, expect } from "@playwright/experimental-ct-react";
import App158 from "./App158.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App158 />);
  await expect(component).toContainText("Learn React");
});
