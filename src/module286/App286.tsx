
import { test, expect } from "@playwright/experimental-ct-react";
import App286 from "./App286.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App286 />);
  await expect(component).toContainText("Learn React");
});
