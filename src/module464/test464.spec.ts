
import { test, expect } from "@playwright/experimental-ct-react";
import App464 from "./App464.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App464 />);
  await expect(component).toContainText("Learn React");
});
