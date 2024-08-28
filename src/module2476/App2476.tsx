
import { test, expect } from "@playwright/experimental-ct-react";
import App2476 from "./App2476.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2476 />);
  await expect(component).toContainText("Learn React");
});
