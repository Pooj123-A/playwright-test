
import { test, expect } from "@playwright/experimental-ct-react";
import App2038 from "./App2038.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2038 />);
  await expect(component).toContainText("Learn React");
});
