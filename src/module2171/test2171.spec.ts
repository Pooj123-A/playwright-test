
import { test, expect } from "@playwright/experimental-ct-react";
import App2171 from "./App2171.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2171 />);
  await expect(component).toContainText("Learn React");
});
