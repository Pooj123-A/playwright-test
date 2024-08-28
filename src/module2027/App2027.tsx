
import { test, expect } from "@playwright/experimental-ct-react";
import App2027 from "./App2027.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2027 />);
  await expect(component).toContainText("Learn React");
});
