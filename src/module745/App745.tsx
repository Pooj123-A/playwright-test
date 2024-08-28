
import { test, expect } from "@playwright/experimental-ct-react";
import App745 from "./App745.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App745 />);
  await expect(component).toContainText("Learn React");
});
