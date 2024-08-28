
import { test, expect } from "@playwright/experimental-ct-react";
import App152 from "./App152.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App152 />);
  await expect(component).toContainText("Learn React");
});
