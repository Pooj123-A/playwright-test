
import { test, expect } from "@playwright/experimental-ct-react";
import App2096 from "./App2096.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2096 />);
  await expect(component).toContainText("Learn React");
});
