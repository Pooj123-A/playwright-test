
import { test, expect } from "@playwright/experimental-ct-react";
import App2745 from "./App2745.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2745 />);
  await expect(component).toContainText("Learn React");
});
