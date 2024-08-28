
import { test, expect } from "@playwright/experimental-ct-react";
import App2111 from "./App2111.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2111 />);
  await expect(component).toContainText("Learn React");
});
