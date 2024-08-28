
import { test, expect } from "@playwright/experimental-ct-react";
import App911 from "./App911.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App911 />);
  await expect(component).toContainText("Learn React");
});
