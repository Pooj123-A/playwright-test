
import { test, expect } from "@playwright/experimental-ct-react";
import App2585 from "./App2585.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2585 />);
  await expect(component).toContainText("Learn React");
});
