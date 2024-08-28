
import { test, expect } from "@playwright/experimental-ct-react";
import App163 from "./App163.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App163 />);
  await expect(component).toContainText("Learn React");
});
