
import { test, expect } from "@playwright/experimental-ct-react";
import App794 from "./App794.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App794 />);
  await expect(component).toContainText("Learn React");
});
