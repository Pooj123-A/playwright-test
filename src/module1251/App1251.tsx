
import { test, expect } from "@playwright/experimental-ct-react";
import App1251 from "./App1251.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1251 />);
  await expect(component).toContainText("Learn React");
});
