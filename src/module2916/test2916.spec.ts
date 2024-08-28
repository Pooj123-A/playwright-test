
import { test, expect } from "@playwright/experimental-ct-react";
import App2916 from "./App2916.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2916 />);
  await expect(component).toContainText("Learn React");
});
